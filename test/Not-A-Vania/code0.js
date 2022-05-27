gdjs.TitleCode = {};
gdjs.TitleCode.GDBitmapTitleObjects1= [];
gdjs.TitleCode.GDBitmapTitleObjects2= [];
gdjs.TitleCode.GDBitmapTitleObjects3= [];
gdjs.TitleCode.GDBitmapTitleObjects4= [];
gdjs.TitleCode.GDBitmapTitleObjects5= [];
gdjs.TitleCode.GDBitmapMenuExitObjects1= [];
gdjs.TitleCode.GDBitmapMenuExitObjects2= [];
gdjs.TitleCode.GDBitmapMenuExitObjects3= [];
gdjs.TitleCode.GDBitmapMenuExitObjects4= [];
gdjs.TitleCode.GDBitmapMenuExitObjects5= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects1= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects2= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects3= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects4= [];
gdjs.TitleCode.GDBitmapMenuCreditsObjects5= [];
gdjs.TitleCode.GDBitmapMenuStartObjects1= [];
gdjs.TitleCode.GDBitmapMenuStartObjects2= [];
gdjs.TitleCode.GDBitmapMenuStartObjects3= [];
gdjs.TitleCode.GDBitmapMenuStartObjects4= [];
gdjs.TitleCode.GDBitmapMenuStartObjects5= [];
gdjs.TitleCode.GDMenuBorderObjects1= [];
gdjs.TitleCode.GDMenuBorderObjects2= [];
gdjs.TitleCode.GDMenuBorderObjects3= [];
gdjs.TitleCode.GDMenuBorderObjects4= [];
gdjs.TitleCode.GDMenuBorderObjects5= [];
gdjs.TitleCode.GDMenuSelectorObjects1= [];
gdjs.TitleCode.GDMenuSelectorObjects2= [];
gdjs.TitleCode.GDMenuSelectorObjects3= [];
gdjs.TitleCode.GDMenuSelectorObjects4= [];
gdjs.TitleCode.GDMenuSelectorObjects5= [];
gdjs.TitleCode.GDTitleBG1Objects1= [];
gdjs.TitleCode.GDTitleBG1Objects2= [];
gdjs.TitleCode.GDTitleBG1Objects3= [];
gdjs.TitleCode.GDTitleBG1Objects4= [];
gdjs.TitleCode.GDTitleBG1Objects5= [];
gdjs.TitleCode.GDFadeObjectObjects1= [];
gdjs.TitleCode.GDFadeObjectObjects2= [];
gdjs.TitleCode.GDFadeObjectObjects3= [];
gdjs.TitleCode.GDFadeObjectObjects4= [];
gdjs.TitleCode.GDFadeObjectObjects5= [];
gdjs.TitleCode.GDKeyboardControlsObjects1= [];
gdjs.TitleCode.GDKeyboardControlsObjects2= [];
gdjs.TitleCode.GDKeyboardControlsObjects3= [];
gdjs.TitleCode.GDKeyboardControlsObjects4= [];
gdjs.TitleCode.GDKeyboardControlsObjects5= [];
gdjs.TitleCode.GDGamepadControlsObjects1= [];
gdjs.TitleCode.GDGamepadControlsObjects2= [];
gdjs.TitleCode.GDGamepadControlsObjects3= [];
gdjs.TitleCode.GDGamepadControlsObjects4= [];
gdjs.TitleCode.GDGamepadControlsObjects5= [];
gdjs.TitleCode.GDJumpAttackObjects1= [];
gdjs.TitleCode.GDJumpAttackObjects2= [];
gdjs.TitleCode.GDJumpAttackObjects3= [];
gdjs.TitleCode.GDJumpAttackObjects4= [];
gdjs.TitleCode.GDJumpAttackObjects5= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.condition3IsTrue_0 = {val:false};
gdjs.TitleCode.condition4IsTrue_0 = {val:false};
gdjs.TitleCode.condition5IsTrue_0 = {val:false};
gdjs.TitleCode.condition6IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};
gdjs.TitleCode.condition3IsTrue_1 = {val:false};
gdjs.TitleCode.condition4IsTrue_1 = {val:false};
gdjs.TitleCode.condition5IsTrue_1 = {val:false};
gdjs.TitleCode.condition6IsTrue_1 = {val:false};


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}}

}


{



}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(16).getChild("Checkpoint").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).getChild("Lives").setNumber(3);
}}

}


{



}


{



}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects4);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects4);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects4);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
gdjs.TitleCode.condition0IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleCode.condition0IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
if( gdjs.TitleCode.condition1IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects4.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects4[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuExitObjects4[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Up")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects4[k] = gdjs.TitleCode.GDBitmapMenuExitObjects4[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects4.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects4.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects4[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuCreditsObjects4[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Up")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects4[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects4[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects4.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects4.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects4[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuStartObjects4[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Up")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects4[k] = gdjs.TitleCode.GDBitmapMenuStartObjects4[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects4.length = k;}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition2IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11452684);
}
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDBitmapMenuCreditsObjects4 */
/* Reuse gdjs.TitleCode.GDBitmapMenuExitObjects4 */
/* Reuse gdjs.TitleCode.GDBitmapMenuStartObjects4 */
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects4);
{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects4.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects4[i].setY((( gdjs.TitleCode.GDBitmapMenuStartObjects4.length === 0 ) ? (( gdjs.TitleCode.GDBitmapMenuCreditsObjects4.length === 0 ) ? (( gdjs.TitleCode.GDBitmapMenuExitObjects4.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuExitObjects4[0].getY()) :gdjs.TitleCode.GDBitmapMenuCreditsObjects4[0].getY()) :gdjs.TitleCode.GDBitmapMenuStartObjects4[0].getY()) - 16);
}
}{runtimeScene.getVariables().get("SelectorButtonsReleased").setNumber(0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MenuMove.wav", 1, false, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects3);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects3);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects3);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
gdjs.TitleCode.condition0IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleCode.condition0IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)));
if( gdjs.TitleCode.condition1IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects3.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects3[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuExitObjects3[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Down")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects3[k] = gdjs.TitleCode.GDBitmapMenuExitObjects3[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects3.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects3.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects3[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuCreditsObjects3[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Down")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects3[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects3[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects3.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects3.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects3[i].getVariableNumber(gdjs.TitleCode.GDBitmapMenuStartObjects3[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("CurrentMenuItem").getChild("Down")) ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects3[k] = gdjs.TitleCode.GDBitmapMenuStartObjects3[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects3.length = k;}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition2IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11455100);
}
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDBitmapMenuCreditsObjects3 */
/* Reuse gdjs.TitleCode.GDBitmapMenuExitObjects3 */
/* Reuse gdjs.TitleCode.GDBitmapMenuStartObjects3 */
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects3);
{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects3[i].setY((( gdjs.TitleCode.GDBitmapMenuStartObjects3.length === 0 ) ? (( gdjs.TitleCode.GDBitmapMenuCreditsObjects3.length === 0 ) ? (( gdjs.TitleCode.GDBitmapMenuExitObjects3.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuExitObjects3[0].getY()) :gdjs.TitleCode.GDBitmapMenuCreditsObjects3[0].getY()) :gdjs.TitleCode.GDBitmapMenuStartObjects3[0].getY()) - 16);
}
}{runtimeScene.getVariables().get("SelectorButtonsReleased").setNumber(0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MenuMove.wav", 1, false, 60, 1);
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDMenuSelectorObjects2Objects = Hashtable.newFrom({"MenuSelector": gdjs.TitleCode.GDMenuSelectorObjects2});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBitmapMenuExitObjects2ObjectsGDgdjs_46TitleCode_46GDBitmapMenuCreditsObjects2ObjectsGDgdjs_46TitleCode_46GDBitmapMenuStartObjects2Objects = Hashtable.newFrom({"BitmapMenuExit": gdjs.TitleCode.GDBitmapMenuExitObjects2, "BitmapMenuCredits": gdjs.TitleCode.GDBitmapMenuCreditsObjects2, "BitmapMenuStart": gdjs.TitleCode.GDBitmapMenuStartObjects2});
gdjs.TitleCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
gdjs.TitleCode.condition4IsTrue_0.val = false;
gdjs.TitleCode.condition5IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SelectorButtonsReleased")) == 0;
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = !(gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
gdjs.TitleCode.condition3IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9))));
}if ( gdjs.TitleCode.condition3IsTrue_0.val ) {
{
gdjs.TitleCode.condition4IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10))));
}if ( gdjs.TitleCode.condition4IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition5IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11448724);
}
}}
}
}
}
}
if (gdjs.TitleCode.condition5IsTrue_0.val) {
{runtimeScene.getVariables().get("SelectorButtonsReleased").setNumber(1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects3);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SelectorButtonsReleased")) == 1;
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects3.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects3[i].getOpacity() == 0 ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDFadeObjectObjects3[k] = gdjs.TitleCode.GDFadeObjectObjects3[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects3.length = k;}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.TitleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SelectorButtonsReleased")) == 1;
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDMenuSelectorObjects2Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBitmapMenuExitObjects2ObjectsGDgdjs_46TitleCode_46GDBitmapMenuCreditsObjects2ObjectsGDgdjs_46TitleCode_46GDBitmapMenuStartObjects2Objects, false, runtimeScene, false);
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition2IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11456404);
}
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDBitmapMenuCreditsObjects2 */
/* Reuse gdjs.TitleCode.GDBitmapMenuExitObjects2 */
/* Reuse gdjs.TitleCode.GDBitmapMenuStartObjects2 */
{runtimeScene.getVariables().get("CurrentMenuItem").getChild("ID").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.TitleCode.GDBitmapMenuStartObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuExitObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TitleCode.GDBitmapMenuExitObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuCreditsObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuStartObjects2[0].getVariables()).get("ID"))));
}{runtimeScene.getVariables().get("CurrentMenuItem").getChild("Up").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.TitleCode.GDBitmapMenuStartObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuExitObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TitleCode.GDBitmapMenuExitObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuCreditsObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuStartObjects2[0].getVariables()).get("Up"))));
}{runtimeScene.getVariables().get("CurrentMenuItem").getChild("Down").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.TitleCode.GDBitmapMenuStartObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length === 0 ) ? ((gdjs.TitleCode.GDBitmapMenuExitObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.TitleCode.GDBitmapMenuExitObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuCreditsObjects2[0].getVariables()) : gdjs.TitleCode.GDBitmapMenuStartObjects2[0].getVariables()).get("Down"))));
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDMenuSelectorObjects1Objects = Hashtable.newFrom({"MenuSelector": gdjs.TitleCode.GDMenuSelectorObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBitmapMenuExitObjects1ObjectsGDgdjs_46TitleCode_46GDBitmapMenuCreditsObjects1ObjectsGDgdjs_46TitleCode_46GDBitmapMenuStartObjects1Objects = Hashtable.newFrom({"BitmapMenuExit": gdjs.TitleCode.GDBitmapMenuExitObjects1, "BitmapMenuCredits": gdjs.TitleCode.GDBitmapMenuCreditsObjects1, "BitmapMenuStart": gdjs.TitleCode.GDBitmapMenuStartObjects1});
gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuCreditsObjects1, gdjs.TitleCode.GDBitmapMenuCreditsObjects2);

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuExitObjects1, gdjs.TitleCode.GDBitmapMenuExitObjects2);

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuStartObjects1, gdjs.TitleCode.GDBitmapMenuStartObjects2);


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariables().get("Action")) == "Start" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects2[k] = gdjs.TitleCode.GDBitmapMenuExitObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariables().get("Action")) == "Start" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects2[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariables().get("Action")) == "Start" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects2[k] = gdjs.TitleCode.GDBitmapMenuStartObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage", true);
}}

}


{

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuCreditsObjects1, gdjs.TitleCode.GDBitmapMenuCreditsObjects2);

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuExitObjects1, gdjs.TitleCode.GDBitmapMenuExitObjects2);

gdjs.copyArray(gdjs.TitleCode.GDBitmapMenuStartObjects1, gdjs.TitleCode.GDBitmapMenuStartObjects2);


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects2[i].getVariables().get("Action")) == "Credits" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects2[k] = gdjs.TitleCode.GDBitmapMenuExitObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i].getVariables().get("Action")) == "Credits" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects2[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects2[i].getVariables().get("Action")) == "Credits" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects2[k] = gdjs.TitleCode.GDBitmapMenuStartObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", true);
}}

}


{

/* Reuse gdjs.TitleCode.GDBitmapMenuCreditsObjects1 */
/* Reuse gdjs.TitleCode.GDBitmapMenuExitObjects1 */
/* Reuse gdjs.TitleCode.GDBitmapMenuStartObjects1 */

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuExitObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuExitObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuExitObjects1[i].getVariables().get("Action")) == "Exit" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuExitObjects1[k] = gdjs.TitleCode.GDBitmapMenuExitObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuExitObjects1.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].getVariables().get("Action")) == "Exit" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuCreditsObjects1[k] = gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length = k;for(var i = 0, k = 0, l = gdjs.TitleCode.GDBitmapMenuStartObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDBitmapMenuStartObjects1[i].getVariableString(gdjs.TitleCode.GDBitmapMenuStartObjects1[i].getVariables().get("Action")) == "Exit" ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDBitmapMenuStartObjects1[k] = gdjs.TitleCode.GDBitmapMenuStartObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDBitmapMenuStartObjects1.length = k;}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.TitleCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("SelectorButtonsReleased")) == 1;
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects2[i].getOpacity() == 0 ) {
        gdjs.TitleCode.condition1IsTrue_0.val = true;
        gdjs.TitleCode.GDFadeObjectObjects2[k] = gdjs.TitleCode.GDFadeObjectObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects2.length = k;}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition2IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
gdjs.TitleCode.condition0IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleCode.condition0IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)));
if( gdjs.TitleCode.condition1IsTrue_1.val ) {
    gdjs.TitleCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition3IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11460292);
}
}}
}
}
if (gdjs.TitleCode.condition3IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDFadeObjectObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDFadeObjectObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDFadeObjectObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 255, "linear", 500, false);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Select.wav", 1, false, 50, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeObject"), gdjs.TitleCode.GDFadeObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDFadeObjectObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDFadeObjectObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDFadeObjectObjects1[k] = gdjs.TitleCode.GDFadeObjectObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDFadeObjectObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDMenuSelectorObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDBitmapMenuExitObjects1ObjectsGDgdjs_46TitleCode_46GDBitmapMenuCreditsObjects1ObjectsGDgdjs_46TitleCode_46GDBitmapMenuStartObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition2IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11461580);
}
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.TitleCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.TitleCode.eventsList5 = function(runtimeScene) {

{


gdjs.TitleCode.eventsList2(runtimeScene);
}


{


gdjs.TitleCode.eventsList4(runtimeScene);
}


};gdjs.TitleCode.eventsList6 = function(runtimeScene) {

{



}


{



}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuCredits"), gdjs.TitleCode.GDBitmapMenuCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuExit"), gdjs.TitleCode.GDBitmapMenuExitObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapMenuStart"), gdjs.TitleCode.GDBitmapMenuStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("BitmapTitle"), gdjs.TitleCode.GDBitmapTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("GamepadControls"), gdjs.TitleCode.GDGamepadControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpAttack"), gdjs.TitleCode.GDJumpAttackObjects1);
gdjs.copyArray(runtimeScene.getObjects("KeyboardControls"), gdjs.TitleCode.GDKeyboardControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuBorder"), gdjs.TitleCode.GDMenuBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MenuSelector"), gdjs.TitleCode.GDMenuSelectorObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuExitObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuCreditsObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
for(var i = 0, len = gdjs.TitleCode.GDBitmapMenuStartObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapMenuStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleCode.GDBitmapTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDBitmapTitleObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleCode.GDMenuBorderObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuBorderObjects1[i].setPosition((( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuBorderObjects1[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuCreditsObjects1[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuBorderObjects1[i].getHeight()) / 2));
}
}{for(var i = 0, len = gdjs.TitleCode.GDMenuSelectorObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDMenuSelectorObjects1[i].setPosition((( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterXInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getWidth()) / 2),(( gdjs.TitleCode.GDBitmapMenuStartObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDBitmapMenuStartObjects1[0].getCenterYInScene()) - ((gdjs.TitleCode.GDMenuSelectorObjects1[i].getHeight()) / 2));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Jonathan_So-ForMe-truncade.ogg", 100, true, 100, 1);
}{for(var i = 0, len = gdjs.TitleCode.GDGamepadControlsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDGamepadControlsObjects1[i].setY((( gdjs.TitleCode.GDKeyboardControlsObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDKeyboardControlsObjects1[0].getY()));
}
}{for(var i = 0, len = gdjs.TitleCode.GDJumpAttackObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDJumpAttackObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TitleCode.eventsList5(runtimeScene);
}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDBitmapTitleObjects1.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects2.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects3.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects4.length = 0;
gdjs.TitleCode.GDBitmapTitleObjects5.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects4.length = 0;
gdjs.TitleCode.GDBitmapMenuExitObjects5.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects4.length = 0;
gdjs.TitleCode.GDBitmapMenuCreditsObjects5.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects1.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects2.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects3.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects4.length = 0;
gdjs.TitleCode.GDBitmapMenuStartObjects5.length = 0;
gdjs.TitleCode.GDMenuBorderObjects1.length = 0;
gdjs.TitleCode.GDMenuBorderObjects2.length = 0;
gdjs.TitleCode.GDMenuBorderObjects3.length = 0;
gdjs.TitleCode.GDMenuBorderObjects4.length = 0;
gdjs.TitleCode.GDMenuBorderObjects5.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects1.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects2.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects3.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects4.length = 0;
gdjs.TitleCode.GDMenuSelectorObjects5.length = 0;
gdjs.TitleCode.GDTitleBG1Objects1.length = 0;
gdjs.TitleCode.GDTitleBG1Objects2.length = 0;
gdjs.TitleCode.GDTitleBG1Objects3.length = 0;
gdjs.TitleCode.GDTitleBG1Objects4.length = 0;
gdjs.TitleCode.GDTitleBG1Objects5.length = 0;
gdjs.TitleCode.GDFadeObjectObjects1.length = 0;
gdjs.TitleCode.GDFadeObjectObjects2.length = 0;
gdjs.TitleCode.GDFadeObjectObjects3.length = 0;
gdjs.TitleCode.GDFadeObjectObjects4.length = 0;
gdjs.TitleCode.GDFadeObjectObjects5.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects1.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects2.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects3.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects4.length = 0;
gdjs.TitleCode.GDKeyboardControlsObjects5.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects1.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects2.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects3.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects4.length = 0;
gdjs.TitleCode.GDGamepadControlsObjects5.length = 0;
gdjs.TitleCode.GDJumpAttackObjects1.length = 0;
gdjs.TitleCode.GDJumpAttackObjects2.length = 0;
gdjs.TitleCode.GDJumpAttackObjects3.length = 0;
gdjs.TitleCode.GDJumpAttackObjects4.length = 0;
gdjs.TitleCode.GDJumpAttackObjects5.length = 0;

gdjs.TitleCode.eventsList6(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
