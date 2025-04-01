document.addEventListener('DOMContentLoaded', () => {
  // ParticleJSの処理はmyCanvasにバインドされている
  // myCanvasをDOMツリーから削除すればパーティクルを無効化できる
  const myCanvas = document.getElementById('myCanvas');
  if (myCanvas) {
    myCanvas.remove();
  }

  // パーティクルのために非表示にされていたカーソルを表示する
  document.body.style.cursor = 'default';

  const blockMousemove = (event) => {
    event.stopImmediatePropagation();
  };

  window.addEventListener('mousemove', blockMousemove, true);
});
