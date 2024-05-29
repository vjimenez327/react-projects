

const dummyApiResponse = {
  showLightAndDarkMode: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView:true
}

function featureFlagDataServiceCall(){
  return new Promise((resolve, reject) => {
    if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("some erroe occured. Try again");
  })
}

export default featureFlagDataServiceCall;