document.addEventListener('DOMContentLoaded', () => {
  // ParticleJSの処理はmyCanvasにバインドされている
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

  // マウスカーソルの動きに合わせてPOINTERを追従する
  window.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // スクロール位置を考慮する
    const scrollY = window.scrollY;

    // POINTERが表示されているとき、マウスカーソルの位置に追従させる
    if (pointer.style.visibility === 'inherit') {
      pointer.style.left = mouseX + 'px';
      pointer.style.top = mouseY + scrollY + 'px';
    }
  });
});
