const Container = () => {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  map.setBounds(bounds);

  return (
    <div>
      <div id="TopMap">
        <div id="Map">
          <div
            id="myMap"
            style={{
              width: "500px",
              height: "500px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Container;
