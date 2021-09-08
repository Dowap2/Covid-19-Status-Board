import axios from "axios";

export function GetCovidData() {
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
  var queryParams =
    "?" +
    encodeURIComponent("ServiceKey") +
    "=" +
    process.env.REACT_APP_API_KEY +
    "&" +
    encodeURIComponent("pageNo") +
    "=" +
    encodeURIComponent("1") +
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("1") +
    "&" +
    encodeURIComponent("startCreateDt") +
    "=" +
    encodeURIComponent("20210903") +
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent("20210904");

  axios.get(url + queryParams).then(function(res) {
    console.log(res);
  });
}
