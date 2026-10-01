export class ApiError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

interface ApiOptions extends RequestInit {
    timeoutMs?: number;
}

const DEFAULT_TIMEOUT_MS = 10000;

export async function apiGet<T>(url: string, { timeoutMs = DEFAULT_TIMEOUT_MS, ...init }: ApiOptions = {}): Promise<T> {
    // slow requests are aborted so the ui never waits forever
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { ...init, signal: controller.signal });
        if (!response.ok) {
            throw new ApiError(`Request failed: ${response.statusText}`, response.status);
        }
        return (await response.json()) as T;
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(error instanceof Error ? error.message : 'Network request failed', 0);
    } finally {
        clearTimeout(timeout);
    }
}
