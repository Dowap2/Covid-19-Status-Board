/* Javascript 샘플 코드 */

export function GetCovidData() {
  var xhr = new XMLHttpRequest();
  var url =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson"; /*URL*/
  var queryParams =
    "?" + encodeURIComponent("ServiceKey") + "=" + "ServiceKey"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("startCreateDt") +
    "=" +
    encodeURIComponent("20200310"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("endCreateDt") +
    "=" +
    encodeURIComponent("20200315"); /**/
  xhr.open("GET", url + queryParams);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      console.log(
        "Status: " +
          this.status +
          "nHeaders: " +
          this.getAllResponseHeaders() +
          "nBody: " +
          this.responseText
      );
    }
  };

  xhr.send("");
}
