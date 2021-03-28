mapboxgl.accessToken =
  "pk.eyJ1IjoieWRlamVzdXMiLCJhIjoiY2s3dXUya2piMWVvaDNkb2QxaGVrYjllZCJ9.KzPZwbwx-L3WUyhktrZrog";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ydejesus/ckaotr28h44da1ioewx4hmrqi",
  center: [-93.2296097, 44.9743662],
  zoom: 13,
});

map.on("load", function () {
  // Add a new source from our GeoJSON data and
  // set the 'cluster' option to true. GL-JS will
  // add the point_count property to your source data.
  map.addSource("theft-places", {
    type: "geojson",
    cluster: true,
    clusterMaxZoom: 20, // Max zoom to cluster points on
    clusterRadius: 14, // Radius of each cluster when clustering points (defaults to 50)
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2520848, 44.9753523],
          },
          properties: {
            "Case Number": "UM 19-094475",
            "Nature of Offense": "Warrant/ Trespass",
            "Date/Time Occurred": "04/04/2019 0842",
            "Date Reported": "4/4/19",
            "Incident Location": "1100 Washington Ave S",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "1100 Washington Ave S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.1834007, 44.9793266],
          },
          properties: {
            "Case Number": "UM 19-010278",
            "Nature of Offense":
              "Trespassing/False Information/False Drivers License",
            "Date/Time Occurred": "01/11/2019 0820",
            "Date Reported": "1/11/19",
            "Incident Location": "1250 Fifield St",
            Disposition: "FARRAR/ Closed",
            City: "Minneapolis",
            "Full Address": "1250 Fifield St Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2481214, 44.9757911],
          },
          properties: {
            "Case Number": "UM 19-266818",
            "Nature of Offense": "Possession of Injection Equipment / Trespass",
            "Date/Time Occurred": "09/04/2019 0938",
            "Date Reported": "9/4/19",
            "Incident Location": "1300 2nd St S",
            Disposition: "FARRAR",
            City: "Minneapolis",
            "Full Address": "1300 2nd St S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2481214, 44.9757911],
          },
          properties: {
            "Case Number": "UM 19-259257",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "08/28/2019 1836",
            "Date Reported": "8/28/19",
            "Incident Location": "1300 2nd St S",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "1300 2nd St S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2481214, 44.9757911],
          },
          properties: {
            "Case Number": "UM 19-037486",
            "Nature of Offense": "Warrant/ Trespass",
            "Date/Time Occurred": "02/08/2019 0541",
            "Date Reported": "2/8/19",
            "Incident Location": "1300 2nd St S",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "1300 2nd St S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.245094, 44.97447],
          },
          properties: {
            "Case Number": "UM 19-203873",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "07/12/2019 0705",
            "Date Reported": "7/12/19",
            "Incident Location": "133 19th Ave S",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "133 19th Ave S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2290155, 44.9791287],
          },
          properties: {
            "Case Number": "UM 19-163879",
            "Nature of Offense": "Other Improvised Weapon / Trespass",
            "Date/Time Occurred": "06/07/2019 2107",
            "Date Reported": "6/7/19",
            "Incident Location": "1811 5th St SE",
            Disposition: "LAPP",
            City: "Minneapolis",
            "Full Address": "1811 5th St SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2518308, 44.9620581],
          },
          properties: {
            "Case Number": "UM 19-248866",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "08/19/2019 1846",
            "Date Reported": "8/19/19",
            "Incident Location": "2001 Bloomington Ave",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "2001 Bloomington Ave Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2518308, 44.9620691],
          },
          properties: {
            "Case Number": "UM 19-107044",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "04/16/2019 1825",
            "Date Reported": "4/16/19",
            "Incident Location": "2001 Bloomington Ave",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "2001 Bloomington Ave Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2243047, 44.9782916],
          },
          properties: {
            "Case Number": "UM 19-166873",
            "Nature of Offense":
              "Tampering with Motor Vehicle / Trespassing / Theft from Motor Vehicle",
            "Date/Time Occurred": "06/10/2019 1537",
            "Date Reported": "6/10/19",
            "Incident Location": "2010 6th St Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "2010 6th St Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2229163, 44.9747977],
          },
          properties: {
            "Case Number": "UM 19-170320",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "06/13/2019 1618",
            "Date Reported": "6/13/19",
            "Incident Location": "2301 University Ave Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "2301 University Ave Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2537509, 44.9703623],
          },
          properties: {
            "Case Number": "MP 19-15656",
            "Nature of Offense": "Trespassing",
            "Date/Time Occurred": "7/5/19 4:10",
            "Date Reported": "7/8/19",
            "Incident Location": "2312 6th St S",
            Disposition: "MPD",
            City: "Minneapolis",
            "Full Address": "2312 6th St S Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2335001, 44.9727023],
          },
          properties: {
            "Case Number": "UM 19-099964",
            "Nature of Offense":
              "PosSEssion of drug paraphernalia / trespass / warrant",
            "Date/Time Occurred": "04/09/2019 1311",
            "Date Reported": "4/9/19",
            "Incident Location": "308 Delaware St SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "308 Delaware St SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2355903, 44.9812238],
          },
          properties: {
            "Case Number": "UM 19-137501",
            "Nature of Offense": "Theft / Trespass",
            "Date/Time Occurred": "05/15/2019 1616",
            "Date Reported": "5/15/19",
            "Incident Location": "423 14th Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "423 14th Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2316468, 44.9788386],
          },
          properties: {
            "Case Number": "UM 19-176521",
            "Nature of Offense": "Warrant/Trespass/PCAVIO",
            "Date/Time Occurred": "06/19/2019 0815",
            "Date Reported": "6/19/19",
            "Incident Location": "4th St SE/17th Ave SE",
            Disposition: "THOMAS",
            City: "Minneapolis",
            "Full Address": "4th St SE/17th Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2287209, 44.9725578],
          },
          properties: {
            "Case Number": "UM 19-072033",
            "Nature of Offense": "Warrant/ Narcotics / Trespass",
            "Date/Time Occurred": "03/13/2019 1908",
            "Date Reported": "3/13/19",
            "Incident Location": "601 Delaware St Se",
            Disposition: "QUAST",
            City: "Minneapolis",
            "Full Address": "601 Delaware St Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2287209, 44.9725578],
          },
          properties: {
            "Case Number": "UM 19-021673",
            "Nature of Offense": "Trespassing",
            "Date/Time Occurred": "01/23/2019 0125",
            "Date Reported": "1/22/19",
            "Incident Location": "601 Delaware St Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "601 Delaware St Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2296197, 44.9743762],
          },
          properties: {
            "Case Number": "UM 19-235615",
            "Nature of Offense":
              "Possess Injection Equipment/Recovered Property/Trespass",
            "Date/Time Occurred": "08/08/2019 0106",
            "Date Reported": "8/8/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2295997, 44.974369],
          },
          properties: {
            "Case Number": "UM 19-217145",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "07/23/2019 1535",
            "Date Reported": "7/23/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2296157, 44.9743685],
          },
          properties: {
            "Case Number": "UM 19-162137",
            "Nature of Offense": "Flee on Foot/Trespass",
            "Date/Time Occurred": "06/06/2019 1447",
            "Date Reported": "6/6/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2296227, 44.974367],
          },
          properties: {
            "Case Number": "UM 19-153152",
            "Nature of Offense": "Obstruction / Warrant/ Trespass",
            "Date/Time Occurred": "05/30/2019 0615",
            "Date Reported": "5/30/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2296097, 44.974373],
          },
          properties: {
            "Case Number": "UM 19-141070",
            "Nature of Offense": "Tampering with Motor Vehicle / Trespassing",
            "Date/Time Occurred": "05/18/2019 2016",
            "Date Reported": "5/18/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.22961, 44.97437],
          },
          properties: {
            "Case Number": "UM 19-129815",
            "Nature of Offense": "Health and Welfare Hold /Trespass",
            "Date/Time Occurred": "05/08/2019 1125",
            "Date Reported": "5/8/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.229612, 44.9743668],
          },
          properties: {
            "Case Number": "UM 19-124779",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "05/03/2019 1856",
            "Date Reported": "5/3/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.229599, 44.9743672],
          },
          properties: {
            "Case Number": "UM 19-121222",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "04/30/2019 0930",
            "Date Reported": "4/30/19",
            "Incident Location": "615 Washington Ave SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2296097, 44.9743665],
          },
          properties: {
            "Case Number": "UM 19-044682",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "02/15/2019 0946",
            "Date Reported": "2/15/19",
            "Incident Location": "615 Washington Ave Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.229587, 44.9743725],
          },
          properties: {
            "Case Number": "UM 19-001806",
            "Nature of Offense":
              "Receiving & Concealing stolen property/Warrant/Trespassing",
            "Date/Time Occurred": "01/02/2019 1847",
            "Date Reported": "1/2/19",
            "Incident Location": "615 Washington Ave Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "615 Washington Ave Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2300497, 44.9856887],
          },
          properties: {
            "Case Number": "UM 19-075734",
            "Nature of Offense":
              "False Drivers License/ Consumption of Alcohol by Minor / Trespass",
            "Date/Time Occurred": "03/17/2019 0152",
            "Date Reported": "3/17/19",
            "Incident Location": "930 15th Ave Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "930 15th Ave Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2318874, 44.9747621],
          },
          properties: {
            "Case Number": "UM 19-253555",
            "Nature of Offense": "Trespass",
            "Date/Time Occurred": "08/23/2019 1427",
            "Date Reported": "8/23/19",
            "Incident Location": "Beacon St Se/ Union St SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "Beacon St Se/ Union St SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2303185, 44.9747654],
          },
          properties: {
            "Case Number": "UM 19-211430",
            "Nature of Offense":
              "Theft from Auto / Tamper with Motor Vehicle / Trespass",
            "Date/Time Occurred": "07/18/2019 1501",
            "Date Reported": "7/18/19",
            "Incident Location": "Harvard St Se / Beacon St Se",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "Harvard St Se / Beacon St Se Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2302936, 44.9737549],
          },
          properties: {
            "Case Number": "UM 19-115636",
            "Nature of Offense":
              "Receiving Stolen Property /Obstruction/ Trespassing/ Possession of Drug Paraphernalia",
            "Date/Time Occurred": "04/24/2019 2140",
            "Date Reported": "4/24/19",
            "Incident Location": "Harvard St SE / Washington Ave SE",
            Disposition: "THOMAS",
            City: "Minneapolis",
            "Full Address": "Harvard St SE / Washington Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2536064, 44.9837558],
          },
          properties: {
            "Case Number": "UM 19-244894",
            "Nature of Offense":
              "Warrant/False Info to a Police Officer/Trespass",
            "Date/Time Occurred": "08/16/2019 0142",
            "Date Reported": "8/16/19",
            "Incident Location": "Main St SE/15th Ave SE",
            Disposition: "PRINTZ",
            City: "Minneapolis",
            "Full Address": "Main St SE/15th Ave SE Minneapolis ",
          },
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-93.2361176, 44.9777808],
          },
          properties: {
            "Case Number": "UM 19-117437",
            "Nature of Offense":
              "Trespass/ Possession of Injection Equipment / Prescription Drugs- Not in Orginal Container",
            "Date/Time Occurred": "04/24/2019 1524",
            "Date Reported": "4/26/19",
            "Incident Location": "Pillsbury Dr SE/ Pleasant St SE",
            Disposition: "Closed",
            City: "Minneapolis",
            "Full Address": "Pillsbury Dr SE/ Pleasant St SE Minneapolis ",
          },
        },
      ],
    },
  }); //closes map.addSource
  //add a layer showing the places, along with styling
  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "theft-places",
    filter: ["has", "point_count"],
    paint: {
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 5
      //   * Yellow, 30px circles when point count is between 100 and 5
      //   * Pink, 40px circles when point count is greater than or equal to 10
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#51bbd6",
        5,
        "#f1f075",
        10,
        "#f28cb1",
      ],
      "circle-radius": ["step", ["get", "point_count"], 10, 10, 20, 30, 25],
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "theft-places",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{point_count_abbreviated}",
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 12,
    },
  });

  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "theft-places",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": "#11b4da",
      "circle-radius": 4,
      "circle-stroke-width": 1,
      "circle-stroke-color": "#fff",
    },
  });
  //inspect cluster on click
  map.on("click", "clusters", function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    });
    var clusterId = features[0].properties.cluster_id;
    map
      .getSource("theft-places")
      .getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return;

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        });
      });
  });
  map.on("click", "unclustered-point", function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = `<strong>Incident Location:</strong> ${e.features[0].properties["Incident Location"]}<br /><strong>Nature of Offense:</strong> ${e.features[0].properties["Nature of Offense"]}<br /><strong>Date Reported:</strong> ${e.features[0].properties["Date Reported"]}`;
    // Ensure that if the map is zoomed out such that
    // multiple copies of the feature are visible, the
    // popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });
  //mousepoint for clustered dots
  map.on("mouseenter", "clusters", function () {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters", function () {
    map.getCanvas().style.cursor = "";
  });
  map.on("mouseenter", "unclustered-point", function () {
    //mousepoint for single dots
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "unclustered-point", function () {
    map.getCanvas().style.cursor = "";
  });
}); //closes map.on('load' function)
