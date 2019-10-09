import './styles/styles.scss';

import html from '@bbob/html';

const header = document.querySelector(
  '#template-header'
) as HTMLTextAreaElement;

const footer = document.querySelector(
  '#template-footer'
) as HTMLTextAreaElement;

const body = document.querySelector('#template-body') as HTMLTextAreaElement;

const lock = document.querySelector('#lock-branding') as HTMLInputElement;

const result = document.querySelector('#result') as HTMLDivElement;

const btn = document.querySelector('#save-button');

const copyBtn = document.querySelector('#copy');

header.addEventListener('keyup', () => {
  updateResult();
});

footer.addEventListener('keyup', () => {
  updateResult();
});

body.addEventListener('keyup', () => {
  updateResult();
});

lock.addEventListener('change', () => {
  header.disabled = lock.checked;
  footer.disabled = lock.checked;
});

btn.addEventListener('click', () => {
  if ('localStorage' in window) {
    window.localStorage.setItem(
      'email-template',
      JSON.stringify({ header: header.value, footer: footer.value })
    );
  }
});
copyBtn.addEventListener('click', () => {
  (navigator as any).permissions
    .query({ name: 'clipboard-write' })
    .then((res: any) => {
      if (res.state === 'granted' || res.state === 'prompt') {
        (navigator as any).clipboard
          .writeText(result.innerText.toString())
          .then(() => {
            alert('Text copied');
          });
      }
    });
});
const updateResult = () => {
  const emailContent = header.value + body.value + footer.value;
  const processed = html(header.value + body.value + footer.value);
  const preview = document.querySelector('#preview');
  preview.innerHTML = processed;
  result.innerHTML = emailContent;
};

window.onload = () => {
  if ('localStorage' in window) {
    const data = JSON.parse(localStorage.getItem('email-template')) as any;
    header.value = data.header;
    footer.value = data.footer;
  }
};
