export interface PrismicPageResponse<T> {
  page?: number;
  results_size?: number;
  total_pages?: number;
  total_results_size?: number;
  results?: T[];
}
