import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../maps.css'


export default function Maps() {
  return (
    <div className="map-container">
      <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=555&amp;height=555&amp;hl=en&amp;q=%20ineg%C3%B6l%20Osmaniye%20Mahallesi%20Bursa+(Oto%20Kurtarma)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>
  )

  
}