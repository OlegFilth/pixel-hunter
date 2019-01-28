const getNode = (markup) => {
  const wrap = document.createElement(`div`);
  const nodeEl = document.createRange().createContextualFragment(`${markup}`);
  wrap.appendChild(nodeEl);
  return wrap;
};

export default getNode;
