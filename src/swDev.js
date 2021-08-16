const publicVapidKey = 'BIvn7oScmmRDESNVZb_PU7stFiz-ABZuOc_WFM0wSPWGp6-tYz93K5T0JiJBFMEi7seUqV_HBPrxR2seFTa7HzM'

// funcion para convertir un string a base64
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// export const swDev =()=>{
//     const determineAppServerKey = () =>{
//     return urlBase64ToUint8Array(publicVapidKey)
//   }


//   let swUrl= `${process.env.PUBLIC_URL}/sw.js`
//   navigator.serviceWorker.register(swUrl).then(response =>{
//     console.log('response', response);
//      return response.pushManager.getSubscription()
//       .then((subscription)=>{
//         return response.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: determineAppServerKey()
//         })
//       })
//    })
// }