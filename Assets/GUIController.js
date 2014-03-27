#pragma strict
var EnStyle : GUIStyle;
var NormalStyle : GUIStyle;
private var diameter : float;
private var isStarted : boolean = false;
private var startTimer : float = 0;
private var isStarting : boolean = true;
private var showQuit : boolean = false;
private var showEnd : boolean = false;
private var isEnding : boolean = true;
private var showThanks : boolean = false;

function Start () {

}

function Update () {

	if (!isStarted) {
		diameter = Mathf.Min(Screen.width,Screen.height);
		EnStyle.fontSize = diameter/10;
		NormalStyle.fontSize = diameter/30;
		if (isStarting) {
			if (startTimer<4) startTimer += Time.deltaTime;
			//else isStarting = false;
		}
		else {
			if (startTimer>0) startTimer -= Time.deltaTime;
			else isStarted = true;
		}
		EnStyle.normal.textColor.a = startTimer/4;
		NormalStyle.normal.textColor.a = startTimer/4;
	}
}

function OnGUI () {

	if (!isStarted) {
	    GUI.Label(Rect(Screen.width/2-2*EnStyle.fontSize, Screen.height/3+1.2*EnStyle.fontSize, 5*EnStyle.fontSize, 1000), "Trifolium",EnStyle);
	    GUI.Label(Rect(NormalStyle.fontSize, Screen.height-2*NormalStyle.fontSize, 20*NormalStyle.fontSize, 1000), "by pengbitao@inpla.net",NormalStyle);
    }

}