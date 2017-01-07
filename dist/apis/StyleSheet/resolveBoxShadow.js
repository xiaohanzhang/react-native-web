var _normalizeColor=require('../../modules/normalizeColor');var _normalizeColor2=_interopRequireDefault(_normalizeColor);
var _normalizeValue=require('./normalizeValue');var _normalizeValue2=_interopRequireDefault(_normalizeValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var defaultOffset={height:0,width:0};

var applyOpacity=function applyOpacity(color){var opacity=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;
var nullableColor=(0,_normalizeColor2.default)(color);
var colorInt=nullableColor===null?0x00000000:nullableColor;
var r=Math.round((colorInt&0xff000000)>>>24);
var g=Math.round((colorInt&0x00ff0000)>>>16);
var b=Math.round((colorInt&0x0000ff00)>>>8);
var a=(((colorInt&0x000000ff)>>>0)/255).toFixed(2);
return'rgba('+r+','+g+','+b+','+a*opacity+')';
};


var resolveBoxShadow=function resolveBoxShadow(resolvedStyle,style){var _ref=
style.shadowOffset||defaultOffset;var height=_ref.height;var width=_ref.width;
var offsetX=(0,_normalizeValue2.default)(null,width);
var offsetY=(0,_normalizeValue2.default)(null,height);
var blurRadius=(0,_normalizeValue2.default)(null,style.shadowRadius||0);
var color=applyOpacity(style.shadowColor,style.shadowOpacity);

var boxShadow=offsetX+' '+offsetY+' '+blurRadius+' '+color;
resolvedStyle.boxShadow=style.boxShadow?style.boxShadow+', '+boxShadow:boxShadow;
};

module.exports=resolveBoxShadow;