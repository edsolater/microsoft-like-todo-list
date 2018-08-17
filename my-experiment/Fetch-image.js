function download_image() {
  // 抓取图片
  fetch(`/whiteEye.png`)
    .then(res => res.blob())
    .then(imageBlob => {
      // 创建图片便签，src载入生成的虚拟URL，并贴到DOM上
      const image = document.createElement('img')
      image.onload = function() {
        URL.revokeObjectURL(image.src)
      }
      image.src = URL.createObjectURL(imageBlob)
      document.body.appendChild(image)
    })
}
