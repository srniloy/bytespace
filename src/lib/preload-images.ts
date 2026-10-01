// resolves when every image settles, never rejects, gives up after timeoutMs
// so the grid can never get stuck on a skeleton
export function preloadImages(srcs: string[], timeoutMs = 4000): Promise<void> {
    const loads = srcs.map(
        (src) =>
            new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = src;
            }),
    );
    const timeout = new Promise<void>((resolve) => {
        setTimeout(resolve, timeoutMs);
    });
    return Promise.race([Promise.all(loads).then(() => undefined), timeout]);
}
