// import  zoom  from 'jquery-zoom';
// import $ from 'jquery';

const Zoom = ({img, id, alt}) =>{

    function zoom(e){
        var zoomer = e.currentTarget;
        console.log("zoomer:" + (zoomer))
        // console.log("event"+ e)
        // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        // e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        // x = offsetX/zoomer.offsetWidth*100
        // y = offsetY/zoomer.offsetHeight*100
        // zoomer.style.backgroundPosition = x + '% ' + y + '%';
      }

    return (
        <>
            {/* <img id={id} src={img} alt="sida" className="profile-image"/> */}
            <figure className="zoom" onMouseMove={e => zoom(e)} style={{"background-image":`url(${img}`}}>
                <img src={img} alt={alt}/>
            </figure>
        </>
    )
}

export default Zoom;