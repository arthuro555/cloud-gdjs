gdjs.WinScreenCode = {};
gdjs.WinScreenCode.forEachCount0_3 = 0;

gdjs.WinScreenCode.forEachCount1_3 = 0;

gdjs.WinScreenCode.forEachCount2_3 = 0;

gdjs.WinScreenCode.forEachIndex3 = 0;

gdjs.WinScreenCode.forEachObjects3 = [];

gdjs.WinScreenCode.forEachTotalCount3 = 0;

gdjs.WinScreenCode.GDCongratsObjects1= [];
gdjs.WinScreenCode.GDCongratsObjects2= [];
gdjs.WinScreenCode.GDCongratsObjects3= [];
gdjs.WinScreenCode.GDWinTimeObjects1= [];
gdjs.WinScreenCode.GDWinTimeObjects2= [];
gdjs.WinScreenCode.GDWinTimeObjects3= [];
gdjs.WinScreenCode.GDNextStepsObjects1= [];
gdjs.WinScreenCode.GDNextStepsObjects2= [];
gdjs.WinScreenCode.GDNextStepsObjects3= [];
gdjs.WinScreenCode.GDFadeObjectObjects1= [];
gdjs.WinScreenCode.GDFadeObjectObjects2= [];
gdjs.WinScreenCode.GDFadeObjectObjects3= [];

gdjs.WinScreenCode.conditionTrue_0 = {val:false};
gdjs.WinScreenCode.condition0IsTrue_0 = {val:false};
gdjs.WinScreenCode.condition1IsTrue_0 = {val:false};
gdjs.WinScreenCode.condition2IsTrue_0 = {val:false};
gdjs.WinScreenCode.condition3IsTrue_0 = {val:false};
gdjs.WinScreenCode.conditionTrue_1 = {val:false};
gdjs.WinScreenCode.condition0IsTrue_1 = {val:false};
gdjs.WinScreenCode.condition1IsTrue_1 = {val:false};
gdjs.WinScreenCode.condition2IsTrue_1 = {val:false};
gdjs.WinScreenCode.condition3IsTrue_1 = {val:false};


gdjs.WinScreenCode.eventsList0 = function(runtimeScene) {

};gdjs.WinScreenCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Congrats"), gdjs.WinScreenCode.GDCongratsObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextSteps"), gdjs.WinScreenCode.GDNextStepsObjects2);
gdjs.copyArray(runtimeScene.getObjects("WinTime"), gdjs.WinScreenCode.GDWinTimeObjects2);

gdjs.WinScreenCode.forEachTotalCount3 = 0;
gdjs.WinScreenCode.forEachObjects3.length = 0;
gdjs.WinScreenCode.forEachCount0_3 = gdjs.WinScreenCode.GDCongratsObjects2.length;
gdjs.WinScreenCode.forEachTotalCount3 += gdjs.WinScreenCode.forEachCount0_3;
gdjs.WinScreenCode.forEachObjects3.push.apply(gdjs.WinScreenCode.forEachObjects3,gdjs.WinScreenCode.GDCongratsObjects2);
gdjs.WinScreenCode.forEachCount1_3 = gdjs.WinScreenCode.GDWinTimeObjects2.length;
gdjs.WinScreenCode.forEachTotalCount3 += gdjs.WinScreenCode.forEachCount1_3;
gdjs.WinScreenCode.forEachObjects3.push.apply(gdjs.WinScreenCode.forEachObjects3,gdjs.WinScreenCode.GDWinTimeObjects2);
gdjs.WinScreenCode.forEachCount2_3 = gdjs.WinScreenCode.GDNextStepsObjects2.length;
gdjs.WinScreenCode.forEachTotalCount3 += gdjs.WinScreenCode.forEachCount2_3;
gdjs.WinScreenCode.forEachObjects3.push.apply(gdjs.WinScreenCode.forEachObjects3,gdjs.WinScreenCode.GDNextStepsObjects2);
for(gdjs.WinScreenCode.forEachIndex3 = 0;gdjs.WinScreenCode.forEachIndex3 < gdjs.WinScreenCode.forEachTotalCount3;++gdjs.WinScreenCode.forEachIndex3) {
gdjs.WinScreenCode.GDCongratsObjects3.length = 0;

gdjs.WinScreenCode.GDNextStepsObjects3.length = 0;

gdjs.WinScreenCode.GDWinTimeObjects3.length = 0;


if (gdjs.WinScreenCode.forEachIndex3 < gdjs.WinScreenCode.forEachCount0_3) {
    gdjs.WinScreenCode.GDCongratsObjects3.push(gdjs.WinScreenCode.forEachObjects3[gdjs.WinScreenCode.forEachIndex3]);
}
else if (gdjs.WinScreenCode.forEachIndex3 < gdjs.WinScreenCode.forEachCount0_3+gdjs.WinScreenCode.forEachCount1_3) {
    gdjs.WinScreenCode.GDWinTimeObjects3.push(gdjs.WinScreenCode.forEachObjects3[gdjs.WinScreenCode.forEachIndex3]);
}
else if (gdjs.WinScreenCode.forEachIndex3 < gdjs.WinScreenCode.forEachCount0_3+gdjs.WinScreenCode.forEachCount1_3+gdjs.WinScreenCode.forEachCount2_3) {
    gdjs.WinScreenCode.GDNextStepsObjects3.push(gdjs.WinScreenCode.forEachObjects3[gdjs.WinScreenCode.forEachIndex3]);
}
if (true) {
{for(var i = 0, len = gdjs.WinScreenCode.GDCongratsObjects3.length ;i < len;++i) {
    gdjs.WinScreenCode.GDCongratsObjects3[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.WinScreenCode.GDCongratsObjects3[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.WinScreenCode.GDWinTimeObjects3.length ;i < len;++i) {
    gdjs.WinScreenCode.GDWinTimeObjects3[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.WinScreenCode.GDWinTimeObjects3[i].getWidth()) / 2));
}
for(var i = 0, len = gdjs.WinScreenCode.GDNextStepsObjects3.length ;i < len;++i) {
    gdjs.WinScreenCode.GDNextStepsObjects3[i].setX(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - ((gdjs.WinScreenCode.GDNextStepsObjects3[i].getWidth()) / 2));
}
}}
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreenCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.WinScreenCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.WinScreenCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("SceneFadeIn", 0, "linear", 500, false);
}
}}

}


{


{
}

}


};gdjs.WinScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.WinScreenCode.condition0IsTrue_0.val = false;
{
gdjs.WinScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.WinScreenCode.GDFadeObjectObjects1);

gdjs.WinScreenCode.condition0IsTrue_0.val = false;
gdjs.WinScreenCode.condition1IsTrue_0.val = false;
gdjs.WinScreenCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinScreenCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDFadeObjectObjects1[i].getBehavior("Tween").exists("SceneFadeIn") ) {
        gdjs.WinScreenCode.condition0IsTrue_0.val = true;
        gdjs.WinScreenCode.GDFadeObjectObjects1[k] = gdjs.WinScreenCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDFadeObjectObjects1.length = k;}if ( gdjs.WinScreenCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WinScreenCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.WinScreenCode.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("SceneFadeIn") ) {
        gdjs.WinScreenCode.condition1IsTrue_0.val = true;
        gdjs.WinScreenCode.GDFadeObjectObjects1[k] = gdjs.WinScreenCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.WinScreenCode.GDFadeObjectObjects1.length = k;}if ( gdjs.WinScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.WinScreenCode.conditionTrue_1 = gdjs.WinScreenCode.condition2IsTrue_0;
gdjs.WinScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11572524);
}
}}
}
if (gdjs.WinScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Johnathan_So-Victory.ogg", 80, false, 100, 1);
}}

}


{


gdjs.WinScreenCode.condition0IsTrue_0.val = false;
gdjs.WinScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.WinScreenCode.conditionTrue_1 = gdjs.WinScreenCode.condition0IsTrue_0;
gdjs.WinScreenCode.condition0IsTrue_1.val = false;
gdjs.WinScreenCode.condition1IsTrue_1.val = false;
{
gdjs.WinScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if( gdjs.WinScreenCode.condition0IsTrue_1.val ) {
    gdjs.WinScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.WinScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.WinScreenCode.condition1IsTrue_1.val ) {
    gdjs.WinScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.WinScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.WinScreenCode.conditionTrue_1 = gdjs.WinScreenCode.condition1IsTrue_0;
gdjs.WinScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11568740);
}
}}
if (gdjs.WinScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.WinScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinScreenCode.GDCongratsObjects1.length = 0;
gdjs.WinScreenCode.GDCongratsObjects2.length = 0;
gdjs.WinScreenCode.GDCongratsObjects3.length = 0;
gdjs.WinScreenCode.GDWinTimeObjects1.length = 0;
gdjs.WinScreenCode.GDWinTimeObjects2.length = 0;
gdjs.WinScreenCode.GDWinTimeObjects3.length = 0;
gdjs.WinScreenCode.GDNextStepsObjects1.length = 0;
gdjs.WinScreenCode.GDNextStepsObjects2.length = 0;
gdjs.WinScreenCode.GDNextStepsObjects3.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects1.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects2.length = 0;
gdjs.WinScreenCode.GDFadeObjectObjects3.length = 0;

gdjs.WinScreenCode.eventsList2(runtimeScene);
return;

}

gdjs['WinScreenCode'] = gdjs.WinScreenCode;
