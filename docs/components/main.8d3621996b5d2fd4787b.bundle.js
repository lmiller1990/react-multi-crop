(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1030:function(module,exports,__webpack_require__){var map={"./ReactMultiCrop/ReactMultiCrop.stories.js":456};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1030},1035:function(module,exports){},1036:function(module,exports){},1037:function(module,exports){},1039:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(162).configure)([__webpack_require__(1040),__webpack_require__(1041)],module,!1)}).call(this,__webpack_require__(148)(module))},1040:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1040},1041:function(module,exports,__webpack_require__){var map={"./ReactMultiCrop/ReactMultiCrop.stories.js":456};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1041},456:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(5),__webpack_require__(181);var react=__webpack_require__(0),helpers_typeof=(__webpack_require__(156),__webpack_require__(213)),typeof_default=__webpack_require__.n(helpers_typeof),createClass=__webpack_require__(466),createClass_default=__webpack_require__.n(createClass),assertThisInitialized=__webpack_require__(121),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),classCallCheck=__webpack_require__(311),classCallCheck_default=__webpack_require__.n(classCallCheck),inherits=__webpack_require__(312),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__(467),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(164),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),fabric=(__webpack_require__(114),__webpack_require__(28),__webpack_require__(15),__webpack_require__(44),__webpack_require__(45),__webpack_require__(6),__webpack_require__(104)),Button=__webpack_require__(1068),Grid=__webpack_require__(1067),jsx_runtime=__webpack_require__(42);function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var ReactMultiCrop_CustomFabricRect=function(_fabric$Rect){inherits_default()(CustomFabricRect,_fabric$Rect);var _super=_createSuper(CustomFabricRect);function CustomFabricRect(options){var _this;return classCallCheck_default()(this,CustomFabricRect),(_this=_super.call(this,options)).id=null,options&&(_this.id=options.id),_this}return CustomFabricRect}(fabric.fabric.Rect),ReactMultiCrop_ReactMultiCrop=function(_Component){inherits_default()(ReactMultiCrop,_Component);var _super2=_createSuper(ReactMultiCrop);function ReactMultiCrop(props){var _this2;return classCallCheck_default()(this,ReactMultiCrop),(_this2=_super2.call(this,props)).color=void 0,_this2.opacity=void 0,_this2.strokeColor=void 0,_this2.strokeWidth=void 0,_this2.strokeDashArray=void 0,_this2.REGEXP_ORIGINS=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i,_this2.state={canvas:null,initial:!0},_this2.color=props.cropBackgroundColor||"yellow",_this2.opacity=props.cropBackgroundOpacity||.5,_this2.strokeColor=props.cropOutlineColor||"yellow",_this2.strokeWidth=props.cropOutlineWidth||5,_this2.strokeDashArray=[5,5],_this2.keyboardHandler=_this2.keyboardHandler.bind(assertThisInitialized_default()(_this2)),_this2.addNew=_this2.addNew.bind(assertThisInitialized_default()(_this2)),_this2.deleteShapes=_this2.deleteShapes.bind(assertThisInitialized_default()(_this2)),_this2.multiSelect=_this2.multiSelect.bind(assertThisInitialized_default()(_this2)),_this2.discardActiveObject=_this2.discardActiveObject.bind(assertThisInitialized_default()(_this2)),_this2}return createClass_default()(ReactMultiCrop,[{key:"componentDidMount",value:function componentDidMount(){this.state.canvas||this.initialCanvas()}},{key:"componentDidUpdate",value:function componentDidUpdate(){}},{key:"changeImage",value:function changeImage(){var canvas=this.state.canvas;canvas&&(canvas.backgroundImage||this.initialImage())}},{key:"loadImage",value:function loadImage(img){var _this$state=this.state,initial=_this$state.initial,canvas=_this$state.canvas;if(canvas&&canvas.width&&canvas.height&&img.height&&img.width){var ratio=img.height/img.width,newHeight=canvas.width*ratio;canvas.setHeight(newHeight),canvas.setZoom(canvas.width/img.width),canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas)),"boolean"==typeof initial&&initial&&this.setState({initial:!1},this.initialObjects.bind(this))}}},{key:"isCrossOriginURL",value:function isCrossOriginURL(url){var parts=url.match(this.REGEXP_ORIGINS);return null!==parts&&(parts[1]!==location.protocol||parts[2]!==location.hostname||parts[3]!==location.port)}},{key:"initialImage",value:function initialImage(){var _this$props=this.props,record=_this$props.record,image=_this$props.image,loadImageNow=this.loadImage.bind(this);if("object"===typeof_default()(record)&&record.image){var options={};this.isCrossOriginURL(record.image)&&(options.crossOrigin="Anonymous"),fabric.fabric.Image.fromURL(record.image,loadImageNow,options)}else if("string"==typeof image){var _options={};this.isCrossOriginURL(image)&&(_options.crossOrigin="Anonymous"),fabric.fabric.Image.fromURL(image,loadImageNow,_options)}}},{key:"initialObjects",value:function initialObjects(){var canvas=this.state.canvas;if(canvas){var _this$props2=this.props,record=_this$props2.record,readonly=_this$props2.readonly;if(record){var setOutput=this.setOutput.bind(this),setStateOf=this.setState.bind(this),inputObject=record.clippings,createObject=this.createObject.bind(this);Array.isArray(inputObject)&&inputObject.length>0&&"object"===typeof_default()(inputObject[0])&&inputObject.forEach((function(coord){var rect=createObject(canvas,coord,readonly||!1);rect&&canvas.add(rect)})),canvas.renderAll(),setStateOf({canvas:canvas},setOutput)}else console.log("Not have any record. Skipped.")}}},{key:"zoom",value:function zoom(options){var canvas=this.state.canvas;if(canvas){var delta=options.e.deltaY,zoom=canvas.getZoom();zoom*=Math.pow(.999,delta),zoom>20&&(zoom=20),zoom<.01&&(zoom=.01),canvas.setZoom(zoom),options.e.preventDefault(),options.e.stopPropagation()}}},{key:"mouseHover",value:function mouseHover(options){var onHover=this.props.onHover,converter=this.shapetoStructureData.bind(this),target=options.target;target&&"rect"===target.type&&onHover&&onHover(converter(target))}},{key:"mouseOut",value:function mouseOut(options){var onHover=this.props.onHover,target=options.target;target&&"rect"===target.type&&onHover&&onHover(null)}},{key:"selectionHandler",value:function selectionHandler(options){var onSelect=this.props.onSelect,converter=this.shapetoStructureData.bind(this),target=options.target;target&&"rect"===target.type&&onSelect&&onSelect(converter(target))}},{key:"selectionClearHandler",value:function selectionClearHandler(){var onSelect=this.props.onSelect;onSelect&&onSelect(null)}},{key:"initialCanvas",value:function initialCanvas(){var _this$props3=this.props,id=_this$props3.id,width=_this$props3.width,height=_this$props3.height,readonly=_this$props3.readonly,canvas=new fabric.fabric.Canvas(id||"canvas",{width:width,height:height});if(canvas.uniScaleTransform=!0,readonly){canvas.selectionKey=void 0;var mouseHoverHandler=this.mouseHover.bind(this),mouseHoverOutHandler=this.mouseOut.bind(this),selectionObjectHandler=this.selectionHandler.bind(this),selectionObjectClearHandler=this.selectionClearHandler.bind(this);canvas.on("mouse:over",mouseHoverHandler),canvas.on("mouse:out",mouseHoverOutHandler),canvas.on("selection:created",selectionObjectHandler),canvas.on("selection:updated",selectionObjectHandler),canvas.on("selection:cleared",selectionObjectClearHandler)}else{var doubleClickEvent=this.doubleClickEvent.bind(this),objectModifiedEvent=this.setOutput.bind(this);canvas.on("mouse:dblclick",doubleClickEvent),canvas.on("object:modified",objectModifiedEvent)}var zoomHandler=this.zoom.bind(this);canvas.on("mouse:wheel",zoomHandler),canvas.on("mouse:down",(function(opt){var evt=opt.e;!0===evt.altKey&&(this.isDragging=!0,this.selection=!1,this.lastPosX=evt.clientX,this.lastPosY=evt.clientY)})),canvas.on("mouse:move",(function(opt){if(this.isDragging){var e=opt.e,vpt=this.viewportTransform;vpt[4]+=e.clientX-this.lastPosX,vpt[5]+=e.clientY-this.lastPosY,this.requestRenderAll(),this.lastPosX=e.clientX,this.lastPosY=e.clientY}})),canvas.on("mouse:up",(function(){this.setViewportTransform(this.viewportTransform),this.isDragging=!1,this.selection=!0}));var initialImg=this.initialImage.bind(this);this.setState({canvas:canvas},initialImg)}},{key:"addNew",value:function addNew(){var canvas=this.state.canvas;if(canvas){var rect=this.createObject(canvas,{id:null,rect:{x1:0,y1:0,x2:.2,y2:.2}},!1);rect&&(canvas.add(rect),canvas.renderAll(),this.setState({canvas:canvas},this.setOutput))}}},{key:"doubleClickEvent",value:function doubleClickEvent(options){var canvas=this.state.canvas;if(canvas)if(options&&options.target){var left=options.target.left,top=options.target.top,width=options.target.width,height=options.target.height,attribute={left:left+50,top:top+50,width:width*options.target.scaleX,height:height*options.target.scaleY},rect=this.createObjectByAttribute(attribute);canvas.add(rect),canvas.renderAll(),this.setState({canvas:canvas},this.setOutput)}else if(options&&options.pointer){var _attribute={left:options.absolutePointer.x,top:options.absolutePointer.y,width:100,height:100},_rect=this.createObjectByAttribute(_attribute);canvas.add(_rect),canvas.renderAll(),this.setState({canvas:canvas},this.setOutput)}}},{key:"createObjectByAttribute",value:function createObjectByAttribute(attribute){return new ReactMultiCrop_CustomFabricRect({left:attribute.left,top:attribute.top,width:attribute.width,height:attribute.height,fill:this.color,opacity:this.opacity,id:null,strokeDashArray:this.strokeDashArray,stroke:this.strokeColor,strokeWidth:this.strokeWidth,lockRotation:!0})}},{key:"shapetoStructureData",value:function shapetoStructureData(element){var canvas=this.state.canvas;if(!canvas||!canvas.backgroundImage)return null;var background=canvas.backgroundImage;if(!(background instanceof fabric.fabric.Image))return null;if(void 0===element.left||void 0===element.top||void 0===element.width||void 0===element.height||void 0===element.scaleX||void 0===element.scaleY||void 0===background.width||void 0===background.height)return null;var _this$props4=this.props,includeDataUrl=_this$props4.includeDataUrl,includeHtmlCanvas=_this$props4.includeHtmlCanvas,x1=element.left/background.width,y1=element.top/background.height,x2=(element.left+element.width*element.scaleX)/background.width,y2=(element.top+element.height*element.scaleY)/background.height,rectangle={x1:x1,y1:y1,x2:x2,y2:y2},coord={id:element.id,rect:JSON.stringify(rectangle)};if(includeDataUrl){var dataUrl=null;try{dataUrl=background.toDataURL({height:element.getScaledHeight(),width:element.getScaledWidth(),left:element.left,top:element.top,format:"jpeg"})}catch(error){console.log(error)}coord.dataUrl=dataUrl}if(includeHtmlCanvas){var canvasElement=null;try{canvasElement=background.toCanvasElement({height:element.getScaledHeight(),width:element.getScaledWidth(),left:element.left,top:element.top})}catch(error){console.log(error)}coord.canvasElement=canvasElement}var imgWidth=background.width,imgHeight=background.height,x1Px=x1*imgWidth,x2Px=x2*imgWidth,y1Px=y1*imgHeight,y2Px=y2*imgHeight,rectanglePx={x:x1Px,y:y1Px,x2:x2Px,y2:y2Px,w:x2Px-x1Px,h:y2Px-y1Px,boundX:imgWidth,boundY:imgHeight};return coord.crop=JSON.stringify(rectanglePx),coord.deletedAt="-1",coord}},{key:"deleteShapes",value:function deleteShapes(){var readonly=this.props.readonly,canvas=this.state.canvas;canvas&&!readonly&&(canvas.getActiveObjects().forEach((function(element){canvas.remove(element)})),this.setState({canvas:canvas},this.setOutput))}},{key:"setOutput",value:function setOutput(){var canvas=this.state.canvas;if(canvas){var shapeToStructureData=this.shapetoStructureData.bind(this),outputValue=[];canvas.getObjects("rect").forEach((function(element){var outputData=shapeToStructureData(element);outputData&&outputValue.push(outputData)}));var input=this.props.input;input&&input.onChange(outputValue)}}},{key:"createObject",value:function createObject(canvas,coor,readonly){if(!canvas||!canvas.backgroundImage)return null;var rectangle,background=canvas.backgroundImage;if(!(background instanceof fabric.fabric.Image))return null;if(!background.width||!background.height)return null;rectangle="string"==typeof coor.rect?JSON.parse(coor.rect):coor.rect;var left=background.width*rectangle.x1,top=background.height*rectangle.y1,right=background.width*rectangle.x2,bottom=background.height*rectangle.y2;return new ReactMultiCrop_CustomFabricRect({left:left,top:top,width:right-left,height:bottom-top,fill:this.color,opacity:this.opacity,id:coor.id,strokeDashArray:this.strokeDashArray,stroke:this.strokeColor,strokeWidth:this.strokeWidth,lockRotation:!0,lockMovementX:readonly,lockMovementY:readonly,lockScalingX:readonly,lockScalingY:readonly})}},{key:"multiSelect",value:function multiSelect(){var readonly=this.props.readonly,canvas=this.state.canvas;if(canvas&&!readonly){canvas.discardActiveObject();var sel=new fabric.fabric.ActiveSelection(canvas.getObjects(),{canvas:canvas});canvas.setActiveObject(sel),canvas.requestRenderAll()}else console.log("Canvas not defined")}},{key:"discardActiveObject",value:function discardActiveObject(){var canvas=this.state.canvas;canvas?(canvas.discardActiveObject(),canvas.requestRenderAll()):console.log("Canvas not defined")}},{key:"keyboardHandler",value:function keyboardHandler(event){if(!event.defaultPrevented){var handled=!1,key=event.key||event.keyCode;"Delete"===key||46===key?(this.deleteShapes(),handled=!0):!event.ctrlKey||65!==key&&"a"!==key||(this.multiSelect(),handled=!0),handled&&event.preventDefault()}}},{key:"render",value:function render(){var valueForm,_this$props5=this.props,input=_this$props5.input,source=_this$props5.source,showLabel=_this$props5.showLabel,showButton=_this$props5.showButton,id=_this$props5.id,width=_this$props5.width,height=_this$props5.height,readonly=_this$props5.readonly,renderInputRedux=!!input,nameForm=source;input&&(valueForm=input.value,nameForm=input.name);return Object(jsx_runtime.jsxs)("div",{id:"canvas-wrapper",children:[showLabel&&Object(jsx_runtime.jsx)("div",{className:"label",children:nameForm}),Object(jsx_runtime.jsxs)(Grid.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:!0,onKeyDown:readonly?void 0:this.keyboardHandler,tabIndex:0,children:Object(jsx_runtime.jsx)("canvas",{id:id,width:width,height:height,style:{border:"0px solid #aaa"}})}),showButton&&!readonly&&Object(jsx_runtime.jsxs)(Grid.a,{container:!0,item:!0,xs:!0,direction:"column",justify:"flex-start",alignItems:"flex-start",children:[Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:!0,children:Object(jsx_runtime.jsx)(Button.a,{variant:"contained",id:"addmore",color:"primary",onClick:this.addNew,children:"Add More Shapes"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:!0,children:Object(jsx_runtime.jsx)(Button.a,{variant:"contained",id:"deleteselected",color:"primary",onClick:this.deleteShapes,children:"Delete Selected Object"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:!0,children:Object(jsx_runtime.jsx)(Button.a,{variant:"contained",id:"multiselect",color:"primary",onClick:this.multiSelect,children:"Select All"})}),Object(jsx_runtime.jsx)(Grid.a,{item:!0,xs:!0,children:Object(jsx_runtime.jsx)(Button.a,{variant:"contained",id:"discard",color:"primary",onClick:this.discardActiveObject,children:"Discard Selection"})})]}),renderInputRedux&&Object(jsx_runtime.jsx)("input",{type:"hidden",value:valueForm})]})]})}}]),ReactMultiCrop}(react.Component);ReactMultiCrop_ReactMultiCrop.defaultProps={id:"canvas",width:800,height:800,input:null,source:"react-crop-form",record:{image:null,clippings:[]},image:null,cropBackgroundColor:"yellow",cropBackgroundOpacity:.5,cropOutlineColor:"yellow",cropOutlineWidth:5,readonly:!1,showLabel:!1,showButton:!1,includeDataUrl:!1,includeHtmlCanvas:!1};var src_ReactMultiCrop_ReactMultiCrop=ReactMultiCrop_ReactMultiCrop;try{ReactMultiCrop_ReactMultiCrop.displayName="ReactMultiCrop",ReactMultiCrop_ReactMultiCrop.__docgenInfo={description:"",displayName:"ReactMultiCrop",props:{id:{defaultValue:{value:"canvas"},description:"",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:{value:800},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:800},description:"",name:"height",required:!1,type:{name:"number"}},source:{defaultValue:{value:"react-crop-form"},description:"",name:"source",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"IInputProps"}},record:{defaultValue:{value:"{\n      image: null,\n      clippings: [],\n    }"},description:"",name:"record",required:!1,type:{name:"IRecordProps"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},cropBackgroundColor:{defaultValue:{value:"yellow"},description:"",name:"cropBackgroundColor",required:!1,type:{name:"string"}},cropBackgroundOpacity:{defaultValue:{value:.5},description:"",name:"cropBackgroundOpacity",required:!1,type:{name:"number"}},cropOutlineColor:{defaultValue:{value:"yellow"},description:"",name:"cropOutlineColor",required:!1,type:{name:"string"}},cropOutlineWidth:{defaultValue:{value:5},description:"",name:"cropOutlineWidth",required:!1,type:{name:"number"}},showLabel:{defaultValue:{value:!1},description:"",name:"showLabel",required:!1,type:{name:"boolean"}},showButton:{defaultValue:{value:!1},description:"",name:"showButton",required:!1,type:{name:"boolean"}},includeDataUrl:{defaultValue:{value:!1},description:"",name:"includeDataUrl",required:!1,type:{name:"boolean"}},includeHtmlCanvas:{defaultValue:{value:!1},description:"",name:"includeHtmlCanvas",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:!1},description:"",name:"readonly",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"((value: IOutputData | null) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: IOutputData | null) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactMultiCrop/ReactMultiCrop.tsx#ReactMultiCrop"]={docgenInfo:ReactMultiCrop_ReactMultiCrop.__docgenInfo,name:"ReactMultiCrop",path:"src/ReactMultiCrop/ReactMultiCrop.tsx#ReactMultiCrop"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport ReactMultiCrop from './ReactMultiCrop';\n\nexport default {\n  title: 'ReactMultiCrop',\n  component: ReactMultiCrop,\n};\n\nconst Template = (args) => <ReactMultiCrop hideLabel {...args} />;\nexport const Default = Template.bind({});\nDefault.args = {\n  image: 'https://picsum.photos/200',\n  showLabel: false,\n  showButton: false,\n  includeDataUrl: false,\n  includeHtmlCanvas: false,\n  cropBackgroundColor: 'yellow',\n  cropBackgroundOpacity: 0.3,\n  cropOutlineColor: 'black',\n  cropOutlineWidth: 3,\n  input: {\n    onChange(value) {\n      console.log(value);\n    },\n  },\n};\n\nDefault.parameters = {\n  docs: {\n    description: {\n      component: 'Example load an image to cropper',\n    },\n    source: {\n      code: `<ReactMultiCrop image=\"https://picsum.photos/200\" hideLabel />`,\n    },\n  },\n};\n\nDefault.argTypes = {\n  image: {\n    description: 'image url',\n  },\n  hideLabel: {\n    description: 'hide the default label',\n  },\n};\n",locationsMap:{default:{startLoc:{col:17,line:9},endLoc:{col:65,line:9},startBody:{col:17,line:9},endBody:{col:65,line:9}}}}},title:"ReactMultiCrop",component:src_ReactMultiCrop_ReactMultiCrop};var ReactMultiCrop_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_ReactMultiCrop_ReactMultiCrop,Object.assign({hideLabel:!0},args))};ReactMultiCrop_stories_Template.displayName="Template";var Default=ReactMultiCrop_stories_Template.bind({});Default.args={image:"https://picsum.photos/200",showLabel:!1,showButton:!1,includeDataUrl:!1,includeHtmlCanvas:!1,cropBackgroundColor:"yellow",cropBackgroundOpacity:.3,cropOutlineColor:"black",cropOutlineWidth:3,input:{onChange:function onChange(value){console.log(value)}}},Default.parameters={docs:{description:{component:"Example load an image to cropper"},source:{code:'<ReactMultiCrop image="https://picsum.photos/200" hideLabel />'}}},Default.argTypes={image:{description:"image url"},hideLabel:{description:"hide the default label"}}},477:function(module,exports,__webpack_require__){__webpack_require__(478),__webpack_require__(641),__webpack_require__(642),__webpack_require__(801),__webpack_require__(806),__webpack_require__(808),module.exports=__webpack_require__(1039)},551:function(module,exports){},642:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(162)},808:function(module,exports,__webpack_require__){"use strict";__webpack_require__(9),__webpack_require__(4),__webpack_require__(53),__webpack_require__(809),__webpack_require__(44),__webpack_require__(45),__webpack_require__(810),__webpack_require__(38),__webpack_require__(39);var _clientApi=__webpack_require__(108),_clientLogger=__webpack_require__(48),_configFilename=__webpack_require__(811);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},811:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(162),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(309),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({docs:{container:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.DocsContainer,page:_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.DocsPage}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(1030),module)}.call(this,__webpack_require__(195)(module))}},[[477,1,2]]]);
//# sourceMappingURL=main.8d3621996b5d2fd4787b.bundle.js.map