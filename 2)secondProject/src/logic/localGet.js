export default function getLocalStorageItem(key, defaultValue,gameInfoObjName="gameInfo") {
  const gameInfo = JSON.parse(localStorage.getItem(gameInfoObjName));
  return gameInfo ? gameInfo[key] : defaultValue;
};

