const transfromData = ({
  imageUrl,
}) => {
  console.log(imageUrl)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d')
      var image = new Image()
      image.src = imageUrl
      image.crossOrigin = 'Anonymous'
      const arra = []
      image.onload = function(){ 
        //将图片按像素写入画布 
        context.drawImage(image,0,0,this.width,this.height)
        //读取图片某位置像素信息(x,y为需要读取的像素位置) 
        // imageData = context.getImageData(x,y,1,1).data; 
        console.log(context)
        for(var i = 0 ; i< this.width ; i ++  ){
          for(var j = 0 ; j < this.height ; j ++){
            const data = context.getImageData(i,j,1,1).data
            const result = [i,j,`rgba(${data[0]},${data[1]},${data[2]},${(data[3]/255)})`]
            arra.push(result)
          }
        }
        resolve(arra)
      }  
      image.onerror = function (e) {
        reject(e)
      }
    })
  })
}

export default transfromData