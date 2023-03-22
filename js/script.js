'use strict';

    function titleClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');


    /* [DONE] remove class 'active' from all article links  */


    const activeLinks = document.querySelectorAll('.titles a.active');
    console.log(activeLinks);

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector: ', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');

}
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';
    const optArticleAuthorSelector = '.post-author';

    function generateTitleLinks() {

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log('Deleted list: ', titleList);
    titleList.innerHTML = '';

    /* [DONE] for each article */

    const articles = document.querySelectorAll('.post');
    let html = '';

    for (let article of articles) {

    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');
    console.log('articleId: ', articleId);


    /* [DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).textContent;
    console.log(articleTitle);

    /* [DONE] get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* [DONE] insert link into titleList */

    html = html + linkHTML;
    console.log(html);
}

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log('links: ', links);
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

}

    generateTitleLinks();


    function generateTags(){

    /* find all articles */

    const articles = document.querySelectorAll(opts.articleSelector);

    /* START LOOP: for every article: */

    for (let article of articles) {

      /* find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */

    let html = '';

      /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('.post-tags .list');

      /* split tags into array */

    const articleTagsArray = articleTags.split(' ');

        /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {

          /* generate HTML of the link */
    const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

          /* add generated code to html variable */
    html = html + linkHTML + ' ';
        /* END LOOP: for each tag */
    }
        /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }

    generateTags();

  }

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(let activeTagLink of activeTagLinks) {
    /* remove class active */
    activeTagLink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const targetLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let link of targetLinks) {
    /* add class active */
    link.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('.post-tags .list a');
  /* START LOOP: for each link */
  for(let link of tagLinks){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
}
}

addClickListenersToTags();

function generateAuthors(){
  /*find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    /* generate HTML of the link */
    const linkHTML ='by <a href="#' + articleAuthor + '">' + articleAuthor.toUpperCase();
    /* [add generated code to html variable */
    html = html + linkHTML + ' ';
    /* insert HTML of all the links into the tags wrapper */
    authorWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateAuthors();

function authorClickHandler(event){
  /* [DONE] prevent default action for this event */
  event.preventDefault();
  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Author was clicked!');
  // console.log(event);
  console.log('clicked: ', clickedElement);
  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#', '');

  /* [DONE] find all author links with class active */
  const activeAuthorLinks = document.querySelectorAll('.post-author a.active');

  /* [DONE] START LOOP: for each active tag link */
  for(let link of activeAuthorLinks) {
    /* [DONE] remove class active */
    link.classList.remove('active');
  /* [DONE] END LOOP: for each active tag link */
  }
  /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
  const targetLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log('targetLinks: ', targetLinks);
  /* [DONE] START LOOP: for each found tag link */
  for (let link of targetLinks) {
    /* [DONE] add class active */
    link.classList.add('active');
  /* [DONE] END LOOP: for each found tag link */
  }
  /* [DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + tag + '"]');
}

function addClickListenersToAuthors(){
  /* [DONE] find all links to authors */
  const authorLinks = document.querySelectorAll('.post-author a');
  /* [DONE] START LOOP: for each link */
  for(let link of authorLinks){
    /* [DONE] add tagClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);
  /* [DONE] END LOOP: for each link */
  }
}
addClickListenersToAuthors();
