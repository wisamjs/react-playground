import { isLoading } from './Application.selectors';
describe('Application Selectors', () => {
	describe('isLoading', () => {
		it('should return true if people data is loading', () => {
			const state = {
				people: { loading: true },
				pokemon: {},
			};

			expect(isLoading(state)).toEqual(true);
		});

		it('should return true if pokemon data is loading', () => {
			const state = {
				pokemon: { loading: true },
				people: {},
			};

			expect(isLoading(state)).toEqual(true);
		});

		it('should not return true if no data is loading', () => {
			const state = {
				pokemon: {},
				people: {},
			};

			expect(isLoading(state)).toEqual(false);
		});
	});
});
