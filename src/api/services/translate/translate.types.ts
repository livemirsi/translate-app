export type ResponseGetTranslateText = {
  results: string[];
  meta: {
    ['detected_source_language']: string;
    timing: {
      total: number;
      providers: number;
    };
    routing: {
      id: string;
    };
  };
  service: {
    provider: {
      id: string;
      name: string;
      timing: {
        provider: number;
      };
    };
  };
}
