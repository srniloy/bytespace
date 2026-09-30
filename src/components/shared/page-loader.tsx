export default function PageLoader() {
    return (
        <div className="flex min-h-[40vh] w-full items-center justify-center" role="status">
            <span
                aria-hidden="true"
                className="h-8 w-8 animate-spin rounded-full border-[3px] border-persian-blue/30 border-t-accent-lime"
            />
            <span className="sr-only">Loading…</span>
        </div>
    );
}
