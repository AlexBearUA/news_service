const API_KEY = "HuhT2LeoT7Ua2Tg2s6puWXB3yc9UXWQk";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

class ArticlesApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 0;
    this.perPage = 10;
  }

  async fetchArticles() {
    // const searchParams = new URLSearchParams({
    //   key: API_KEY,
    //   q: this.searchQuery,
    //   per_page: this.perPage,
    //   page: this.page,
    // });

    const url = `${BASE_URL}?q=${this.searchQuery}&api-key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    // this.incrementPage();
    console.dir(data);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const articlesApiService = new ArticlesApiService();

articlesApiService.searchQuery = "cars";
articlesApiService.fetchArticles();

// =============================================================================

const filtrButtonsContainerRef = document.querySelector("ul.news__filtr-menu");

filtrButtonsContainerRef.addEventListener("click", filtrBtnClickHandler);

function filtrBtnClickHandler(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const previousActiveBtn = document.querySelector(
    ".news__filtr-menu-button--active"
  );

  previousActiveBtn.classList.remove("news__filtr-menu-button--active");
  const currentActiveBtn = evt.target;
  currentActiveBtn.classList.add("news__filtr-menu-button--active");
}
