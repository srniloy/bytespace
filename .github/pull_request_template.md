## Goal

<!-- One paragraph: what does this PR change and why? -->

## Screenshots

<!-- Desktop + mobile screenshots are mandatory. For perf PRs also attach Lighthouse before/after. -->

| Desktop | Mobile |
|---|---|
| _paste_ | _paste_ |

## How to review

- [ ] Open the Vercel preview deployment linked below
- [ ] Click through: `/`, `/courses?page=2`, a course card, a creator, `/login`
- [ ] Run: `npm ci`, `npm run lint`, `npm test`, `npm run build`

## Checks

- [ ] `npm run lint` clean
- [ ] `npm test` green (45 tests)
- [ ] `npm run test:e2e` green (5 Chromium specs)
- [ ] No visual change (or screenshots prove the intended change)
- [ ] No secrets, phone numbers, or tracking IDs committed

## Risk & rollback

<!-- What could break, and how do we revert? -->
