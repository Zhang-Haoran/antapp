const processData = (url, method, parameterList, body) => {
  let param = "";
  if (parameterList !== null && parameterList !== undefined) {
    param += "/search?";
    parameterList.forEach((element: { name: any; value: any; }) => {
      param += `${element.name  }=${  element.value  }&`;
    });
    param = param.substring(0, param.lastIndexOf("&"));
  }

  const processing = (processing_url: RequestInfo) => {
    return fetch(processing_url, {
      method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(body),
    });
  };

  if (processing !== null)
    return processing(url + param)
      .then((response) => response.json())
      .then((data) => data);
};

export default processData;
