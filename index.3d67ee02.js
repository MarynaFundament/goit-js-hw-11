const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action = "load-more"]')},t=new class{fetchArticles(){console.log(this);const e=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(e,{headers:{authorization:"4330ebfabc654a6992c2aa792f3173a3"}}).then((e=>e.json())).then((e=>(this.page+=1,e.articles)))}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery=" ",this.page=1}};e.searchForm.addEventListener("submit",(function(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles(searchQuery)})),e.loadMoreBtn.addEventListener("click",(function(){t.fetchArticles(searchQuery)}));
//# sourceMappingURL=index.3d67ee02.js.map