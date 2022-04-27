import './styles.scss'

const Zoom = ({img, id, alt}) =>{

    function zoom(e){
        var zoomer = e.currentTarget;
        var offsetX;
        var offsetY;
        e.nativeEvent.offsetX ? offsetX = e.nativeEvent.offsetX : offsetX = e.nativeEvent.touches[0].pageX
        e.nativeEvent.offsetY ? offsetY = e.nativeEvent.offsetY : offsetX = e.nativeEvent.touches[0].pageX
        var x = offsetX/zoomer.offsetWidth*100
        var y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
      }

    return (
        <>
            <figure className="zoom" onMouseMove={zoom} style={{"background-image":`url(${img}`}}>
                <img src={img} alt={alt} id={id}/>
            </figure>
        </>
    )
}

export default Zoom;