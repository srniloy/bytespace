import { useLocation } from 'react-router-dom';

// skeleton paints the destination background first, so navigation
// never flashes white while the lazy page chunk loads
const GRID_BG = { backgroundImage: 'url(/layout-designs/hero-section-grid.webp)' };

// mirrors home hero: 2-line heading, subtext, search row, lime arc with cards
function HomeHeroSkeleton() {
    return (
        <section style={GRID_BG} className="flex min-h-screen flex-col bg-persian-blue bg-cover">
            <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 pt-50 md:px-8">
                <div className="h-11 w-3/4 max-w-3xl animate-pulse rounded-full bg-white/15 md:h-16" />
                <div className="mt-4 h-11 w-2/3 max-w-2xl animate-pulse rounded-full bg-white/15 md:h-16" />
                <div className="mt-8 h-4 w-1/2 max-w-2xl animate-pulse rounded-full bg-white/10" />
                <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
                    <div className="h-14 flex-1 animate-pulse rounded-full bg-white/90" />
                    <div className="h-14 w-full animate-pulse rounded-full bg-accent-lime/80 sm:w-32" />
                </div>

                <div className="relative mx-auto mt-auto flex w-full max-w-4xl justify-center">
                    <div className="absolute -top-20 mt-10 h-[150vw] w-[90vw] rounded-full bg-accent-lime/40 md:h-[70vw] md:w-[70vw]" />
                    <div className="relative z-10 aspect-[676/515] w-64 animate-pulse rounded-t-3xl bg-white/10 md:w-96" />
                    <div className="absolute left-0 top-[20%] z-20 hidden h-20 w-40 animate-pulse rounded-2xl bg-white/90 sm:block md:left-[10%] md:w-52" />
                    <div className="absolute right-0 top-[30%] z-20 hidden h-24 w-44 animate-pulse rounded-2xl bg-white/90 sm:block md:w-52" />
                    <div className="absolute bottom-[14%] left-4 z-20 hidden h-24 w-44 animate-pulse rounded-2xl bg-white/90 sm:block md:left-20 md:w-52" />
                </div>
            </div>
        </section>
    );
}

// mirrors courses hero: 1-line heading plus search pill with lime button
function CoursesHeroSkeleton() {
    return (
        <section style={GRID_BG} className="bg-persian-blue bg-cover">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-44 pb-20 md:px-8">
                <div className="h-9 w-1/2 max-w-md animate-pulse rounded-full bg-white/15" />
                <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
                    <div className="h-14 flex-1 animate-pulse rounded-full bg-white/90" />
                    <div className="h-14 w-full animate-pulse rounded-full bg-accent-lime/80 sm:w-40" />
                </div>
            </div>
        </section>
    );
}

// mirrors creators hero: heading plus two centered description lines
function CreatorsHeroSkeleton() {
    return (
        <section style={GRID_BG} className="bg-persian-blue bg-cover">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-44 pb-20 text-center md:px-8">
                <div className="h-9 w-1/2 max-w-md animate-pulse rounded-full bg-white/15" />
                <div className="mt-6 h-4 w-2/3 max-w-2xl animate-pulse rounded-full bg-white/10" />
                <div className="mt-3 h-4 w-1/2 max-w-xl animate-pulse rounded-full bg-white/10" />
            </div>
        </section>
    );
}

// mirrors filter pill rows: 3 left pills plus most-relevant on the right
function FilterRowSkeleton() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
                <div className="h-12 w-24 animate-pulse rounded-full border border-gray-200" />
                <div className="h-12 w-24 animate-pulse rounded-full border border-gray-200" />
                <div className="h-12 w-28 animate-pulse rounded-full border border-gray-200" />
            </div>
            <div className="h-12 w-36 animate-pulse rounded-full border border-gray-200" />
        </div>
    );
}

// mirrors category chips: first chip filled lime like the active one
function ChipsRowSkeleton() {
    const widths = ['w-24', 'w-20', 'w-36', 'w-24', 'w-24', 'w-28', 'w-28', 'w-36', 'w-24'];
    return (
        <div className="mt-9 flex flex-wrap gap-6">
            {widths.map((width, index) => (
                <div
                    key={index}
                    className={`h-12 animate-pulse rounded-full ${index === 0 ? 'bg-accent-lime/70' : 'bg-gray-100'} ${width}`}
                />
            ))}
        </div>
    );
}

function CourseCardShell() {
    return (
        <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-3">
            <div className="aspect-16/10 w-full animate-pulse rounded-2xl bg-gray-200" />
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded-full bg-gray-200" />
            <div className="mt-2 h-4 w-1/2 animate-pulse rounded-full bg-gray-100" />
            <div className="mt-4 flex items-center gap-3">
                <div className="h-8 w-24 animate-pulse rounded-full bg-gray-100" />
                <div className="h-8 w-20 animate-pulse rounded-full bg-gray-100" />
            </div>
            <div className="mt-auto px-1 pb-1 pt-4">
                <div className="h-5 w-24 animate-pulse rounded-full bg-gray-200" />
            </div>
        </div>
    );
}

// same grid shell as the live course grid, reused on route load and page change
export function CourseCardGridSkeleton({ count = 9 }: { count?: number }) {
    return (
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {Array.from({ length: count }, (_, index) => (
                <CourseCardShell key={index} />
            ))}
        </div>
    );
}

// mirrors creator cards: round avatar, name, lime badge, role, pills, button
function CreatorCardShell() {
    return (
        <div className="flex h-full w-full flex-col items-center rounded-3xl border border-gray-100 bg-white p-6 text-center">
            <div className="size-24 shrink-0 animate-pulse rounded-full bg-gray-200" />
            <div className="mt-5 h-5 w-36 animate-pulse rounded-full bg-gray-200" />
            <div className="mt-3 h-6 w-20 animate-pulse rounded-full bg-accent-lime/70" />
            <div className="mt-3 h-4 w-44 animate-pulse rounded-full bg-gray-100" />
            <div className="mt-4 flex justify-center gap-3">
                <div className="h-8 w-24 animate-pulse rounded-full bg-gray-100" />
                <div className="h-8 w-24 animate-pulse rounded-full bg-gray-100" />
            </div>
            <div className="mt-6 h-10 w-full animate-pulse rounded-full bg-accent-lime/60" />
        </div>
    );
}

// mirrors course details: title block with share pill, stat pills, video plus enroll card
function CourseDetailsSkeleton() {
    return (
        <>
            <section style={GRID_BG} className="bg-persian-blue bg-cover pt-44">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <div className="h-8 w-3/4 animate-pulse rounded-full bg-white/15" />
                            <div className="mt-3 h-8 w-1/2 animate-pulse rounded-full bg-white/15" />
                            <div className="mt-4 h-5 w-1/3 animate-pulse rounded-full bg-white/10" />
                            <div className="mt-2 h-4 w-40 animate-pulse rounded-full bg-accent-lime/50" />
                        </div>
                        <div className="h-11 w-28 shrink-0 animate-pulse self-start rounded-full bg-accent-lime/80" />
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="h-12 w-40 animate-pulse rounded-full bg-white/90" />
                        <div className="h-12 w-48 animate-pulse rounded-full bg-white/90" />
                        <div className="h-12 w-36 animate-pulse rounded-full bg-white/90" />
                    </div>
                    <div className="mt-10 grid gap-10 pb-20 lg:grid-cols-[1fr_400px]">
                        <div className="relative aspect-16/10 w-full animate-pulse overflow-hidden rounded-2xl bg-white/15">
                            <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30" />
                        </div>
                        <div className="rounded-3xl bg-white p-6">
                            <div className="h-6 w-2/3 animate-pulse rounded-full bg-gray-200" />
                            {[0, 1, 2].map((row) => (
                                <div key={row} className="mt-5 flex items-center justify-between gap-4">
                                    <div className="h-4 flex-1 animate-pulse rounded-full bg-gray-100" />
                                    <div className="h-4 w-14 animate-pulse rounded-full bg-gray-100" />
                                </div>
                            ))}
                            <div className="mt-5 h-4 w-1/3 animate-pulse rounded-full bg-gray-100" />
                            <div className="mt-4 h-8 w-24 animate-pulse rounded-full bg-gray-200" />
                            <div className="mt-4 h-12 w-full animate-pulse rounded-full bg-accent-lime/70" />
                            <div className="mt-6 space-y-3">
                                {[0, 1, 2].map((row) => (
                                    <div key={row} className="h-4 w-3/4 animate-pulse rounded-full bg-gray-100" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// mirrors creator profile: avatar row, bio lines, stat pills with follow, course thumbs
function CreatorProfileSkeleton() {
    return (
        <>
            <section style={GRID_BG} className="bg-persian-blue bg-cover pt-44 pb-20">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                        <div className="size-26 shrink-0 animate-pulse rounded-3xl bg-white/15" />
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
                                <div className="h-8 w-56 animate-pulse rounded-full bg-white/15" />
                                <div className="h-7 w-24 animate-pulse rounded-full bg-accent-lime/80" />
                            </div>
                            <div className="mt-3 h-4 w-64 animate-pulse rounded-full bg-white/10" />
                        </div>
                    </div>
                    <div className="mt-12 space-y-3 text-center sm:text-left">
                        <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
                        <div className="h-4 w-5/6 animate-pulse rounded-full bg-white/10" />
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-between">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <div className="h-11 w-32 animate-pulse rounded-full bg-white/90" />
                            <div className="h-11 w-32 animate-pulse rounded-full bg-white/90" />
                        </div>
                        <div className="h-11 w-28 animate-pulse rounded-full bg-accent-lime/80" />
                    </div>
                </div>
            </section>
            <div className="mx-auto w-full max-w-7xl bg-white px-4 py-12 md:px-8">
                <FilterRowSkeleton />
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="aspect-16/10 w-full animate-pulse rounded-2xl bg-gray-200" />
                    ))}
                </div>
            </div>
        </>
    );
}

// mirrors auth screens: showcase column plus white form card, 2 or 3 fields
function AuthSkeleton({ fields, social = false }: { fields: 2 | 3; social?: boolean }) {
    return (
        <div style={GRID_BG} className="min-h-screen w-full bg-persian-blue bg-cover">
            <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col lg:flex-row">
                <div className="flex w-full flex-col items-center px-8 pt-10 text-center lg:hidden">
                    <div className="size-10 animate-pulse rounded-xl bg-accent-lime/80" />
                    <div className="mt-6 h-6 w-48 animate-pulse rounded-full bg-white/15" />
                    <div className="mt-3 h-4 w-full max-w-md animate-pulse rounded-full bg-white/10" />
                    <div className="mt-2 h-4 w-3/4 max-w-sm animate-pulse rounded-full bg-white/10" />
                </div>
                <div className="hidden w-full flex-col p-16 lg:flex lg:w-1/2">
                    <div className="size-10 animate-pulse rounded-xl bg-accent-lime/80" />
                    <div className="mt-24 h-7 w-64 animate-pulse rounded-full bg-white/15" />
                    <div className="mt-4 h-4 w-full max-w-md animate-pulse rounded-full bg-white/10" />
                    <div className="mt-2 h-4 w-3/4 max-w-sm animate-pulse rounded-full bg-white/10" />
                    <div className="relative mt-12 h-96">
                        <div className="absolute left-[15%] top-[10%] h-64 w-72 animate-pulse rounded-3xl bg-white/90" />
                        <div className="absolute bottom-0 left-[35%] h-28 w-52 animate-pulse rounded-2xl bg-accent-lime/80" />
                    </div>
                </div>
                <div className="flex w-full items-center justify-center p-6 md:p-12 lg:w-1/2">
                    <div className="w-full max-w-[584px] rounded-3xl bg-white p-8 md:p-12">
                        <div className="h-4 w-32 animate-pulse rounded-full bg-gray-100" />
                        <div className="mt-6 h-4 w-28 animate-pulse rounded-full bg-gray-100" />
                        <div className="mt-2 h-10 w-3/4 animate-pulse rounded-full bg-gray-200" />
                        <div className="mt-2 h-10 w-1/2 animate-pulse rounded-full bg-gray-200" />
                        <div className="mt-8 flex flex-col gap-5">
                            {Array.from({ length: fields }, (_, index) => (
                                <div key={index}>
                                    <div className="h-4 w-20 animate-pulse rounded-full bg-gray-100" />
                                    <div className="mt-2 h-14 w-full animate-pulse rounded-xl bg-gray-100" />
                                </div>
                            ))}
                        </div>
                        <div className="ml-auto mt-6 h-12 w-32 animate-pulse rounded-full bg-accent-lime/70" />
                        {social ? (
                            <div className="mt-10 flex items-center justify-center gap-4">
                                <div className="size-14 animate-pulse rounded-2xl bg-gray-100" />
                                <div className="size-14 animate-pulse rounded-2xl bg-gray-100" />
                            </div>
                        ) : (
                            <div className="mx-auto mt-10 h-4 w-56 animate-pulse rounded-full bg-gray-100" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotFoundSkeleton() {
    return (
        <section style={GRID_BG} className="bg-persian-blue bg-cover pb-28 pt-44">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center md:px-8">
                <div className="aspect-[896/357] w-full max-w-4xl animate-pulse rounded-3xl bg-white/10" />
                <div className="mt-8 h-10 w-2/3 max-w-xl animate-pulse rounded-full bg-white/15" />
                <div className="mt-4 h-4 w-1/3 max-w-sm animate-pulse rounded-full bg-white/10" />
                <div className="mt-10 h-12 w-44 animate-pulse rounded-full bg-accent-lime/80" />
            </div>
        </section>
    );
}

export default function RouteSkeleton() {
    const { pathname } = useLocation();

    const skeleton = (() => {
        if (pathname === '/') return <HomeHeroSkeleton />;
        if (pathname === '/courses') {
            return (
                <>
                    <CoursesHeroSkeleton />
                    <div className="mx-auto w-full max-w-7xl bg-white px-4 py-16 md:px-8">
                        <FilterRowSkeleton />
                        <ChipsRowSkeleton />
                        <CourseCardGridSkeleton count={9} />
                    </div>
                </>
            );
        }
        if (pathname === '/creators') {
            return (
                <>
                    <CreatorsHeroSkeleton />
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 bg-white px-4 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
                        {[0, 1, 2].map((index) => (
                            <CreatorCardShell key={index} />
                        ))}
                    </div>
                </>
            );
        }
        if (pathname === '/login') return <AuthSkeleton fields={2} social />;
        if (pathname === '/sign-up') return <AuthSkeleton fields={3} />;
        if (pathname.startsWith('/courses/')) return <CourseDetailsSkeleton />;
        if (pathname.startsWith('/creators/')) return <CreatorProfileSkeleton />;
        return <NotFoundSkeleton />;
    })();

    return (
        <div aria-busy="true" aria-live="polite">
            <span className="sr-only">Loading…</span>
            <div aria-hidden="true">{skeleton}</div>
        </div>
    );
}
