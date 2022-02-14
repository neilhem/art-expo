export interface Exhibition {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  is_featured: boolean;
  description: string;
  short_description: string;
  web_url: string;
  image_url: string;
  type: string;
  status: string;
  aic_start_at: Date;
  aic_end_at: Date;
  date_display: string;
  department_display: string;
  gallery_id: number;
  gallery_title: string;
  artwork_ids: [];
  artwork_titles: [];
  artist_ids: [];
  site_ids: [];
  image_id: string;
  alt_image_ids: [];
  document_ids: [];
  suggest_autocomplete_boosted: Object;
  suggest_autocomplete_all: Object;
  last_updated_source: Date;
  last_updated: Date;
  timestamp: Date;
}

export interface ExhibitionReqParams {
  // A comma-separated list of resource ids to retrieve
  ids?: string;
  // The number of resources to return per page
  limit?: number;
  // The page of resources to retrieve
  page?: number;
  // A comma-separated list of fields to return per resource
  fields?: string;
  // A comma-separated list of subresource to embed in the returned resources
  include?: 'artworks' | 'sites';
}

interface ExhibitionResPagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

interface ExhibitionResInfo {
  license_text: string;
  license_links: string[];
  version: '1.1';
}

interface ExhibitionResConfig {
  iiif_url: string;
  website_url: string;
}

export interface ExhibitionResParams {
  pagination: ExhibitionResPagination;
  data: Exhibition[];
  info: ExhibitionResInfo;
  config: ExhibitionResConfig;
}
