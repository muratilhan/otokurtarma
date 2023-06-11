import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../maps.css'

  function Maps() {
    return (
      <Map className="map" mapLib={maplibregl} 
          initialViewState={{
            longitude: 29.5097,
            latitude: 40.0801,
            zoom: 14
          }}
          style={{width: "100%",height:"300px"}}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=VAcVOX1wWwzkmRS2FNiY"
        >
          <NavigationControl position="top-left" />
          <Marker
            longitude={29.5097}
            latitude={40.0801}
            color='#61db'
          />
      </Map>
    );
  }
  
  export default Maps;