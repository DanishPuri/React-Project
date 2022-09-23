export const fetchApi = (setuserData ,setIsLoading ) => {

    const url = "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/tblYPd5g5k5IKIc98?maxRecords=12&pageSize=100";
 
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key4v56MUqVr9sNJv");
    myHeaders.append("Cookie", "brw=brwKWPXBZ6VlU47n6");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(resData => {
        setuserData(resData.records)
         
        setIsLoading(false)

      })
      .catch(error => console.log('error', error));
  }