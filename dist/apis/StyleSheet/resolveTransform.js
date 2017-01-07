var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



var reduceTransform=function reduceTransform(resolvedStyle,transform){
var type=Object.keys(transform)[0];
var value=(0,_normalizeValue2.default)(type,transform[type]);

if(type==='perspective'){
resolvedStyle.perspective=value;
}else{
var result=type+'('+value+')';
if(resolvedStyle.transform){
resolvedStyle.transform+=' '+result;
}else{
resolvedStyle.transform=result;
}
}
return resolvedStyle;
};


var convertTransformMatrix=function convertTransformMatrix(transformMatrix){
var matrix=transformMatrix.join(',');
return'matrix3d('+matrix+')';
};

var resolveTransform=function resolveTransform(resolvedStyle,style){
if(Array.isArray(style.transform)){
style.transform.reduce(reduceTransform,resolvedStyle);
}else if(style.transformMatrix){
var transform=convertTransformMatrix(style.transformMatrix);
resolvedStyle.transform=transform;
}
};

module.exports=resolveTransform;