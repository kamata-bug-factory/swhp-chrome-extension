document.addEventListener('DOMContentLoaded', () => {
  // ParticleJSは描画するためのコンテナをmyCanvasに追加している
  // myCanvasをDOMツリーから削除すればパーティクルを無効化できる
  const myCanvas = document.getElementById('myCanvas');
  if (myCanvas) {
    myCanvas.remove();
  }

  // パーティクルのために非表示にされていたカーソルを表示する
  document.body.style.cursor = 'default';

  const links = document.querySelectorAll('a');
  const pointer = document.getElementById('POINTER');

  // aタグにmouseenterしたらPOINTERを表示、mouseleaveしたら非表示にする
  // styleの各属性はオリジナルと同じものを設定する
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      pointer.style.visibility = 'inherit';
      pointer.style.opacity = '1';
      pointer.style.transform = 'translate(-50%, -50%) scale(1.5, 1.5)';
    });

    link.addEventListener('mouseleave', () => {
      pointer.style.visibility = 'hidden';
      pointer.style.opacity = '0';
      pointer.style.transform = 'translate(-50%, -50%) scale(1, 1)';
    });
  });

  let mouseX = 0;
  let mouseY = 0;

  // マウスカーソルの動きに合わせてPOINTERを追従する
  window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // POINTERが表示されているとき、マウスカーソルの位置に追従させる
    if (pointer.style.visibility === 'inherit') {
      pointer.style.left = `${mouseX}px`;
      pointer.style.top = `${mouseY + window.scrollY}px`;
    }
  });

  // スクロール時にもPOINTERを追従する
  window.addEventListener('scroll', () => {
    if (pointer.style.visibility === 'inherit') {
      pointer.style.top = `${mouseY + window.scrollY}px`;
    }
  });
});
