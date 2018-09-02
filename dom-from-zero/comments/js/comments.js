'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  list.forEach((comment)=>{
  	commentsContainer.appendChild(createComment(comment));
  });
}

function createComment(comment) {
  const commentWrap = document.createElement('div');
  commentWrap.classList.add('comment-wrap');

  const photo = document.createElement('div');
  photo.title = comment.author.name;
  commentWrap.appendChild(photo);

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.style.backgroundImage = 'url(' + comment.author.pic + ')';
  photo.appendChild(avatar);

  const commentBlock = document.createElement('div');
  commentBlock.classList.add('comment-block');
  commentWrap.appendChild(commentBlock);

  const commentText = document.createElement('p');
  commentText.classList.add('comment-text');
  comment.text.split('\n').forEach((text, index)=>{
  	if (index > 0) {
  		commentText.appendChild(document.createElement('br'));
  	}
  	commentText.appendChild(document.createTextNode(text));
  });
  commentBlock.appendChild(commentText);

  const bottomComment = document.createElement('div');
  bottomComment.classList.add('bottom-comment');
  commentBlock.appendChild(bottomComment);

  const commentDate = document.createElement('div');
  commentDate.textContent = new Date(comment.date).toLocaleString('ru-Ru');
  bottomComment.appendChild(commentDate);

  const commentActions = document.createElement('ul');
  commentActions.classList.add('comment-actions');
  bottomComment.appendChild(commentActions);

  const complain = document.createElement('li');
  complain.classList.add('complain');
  complain.textContent = 'Пожаловаться';
  commentActions.appendChild(complain);

  const reply = document.createElement('li');
  reply.classList.add('reply');
  reply.textContent = 'Ответить';
  commentActions.appendChild(reply);

  return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);