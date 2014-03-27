#pragma strict
var fallCoefficient : float = 1;
var rotateCoefficient : float = 1;
var tallCoefficient : float = 1;
private var fallSpeed : float;
private var rotateSpeed : Vector3;

function Start () {
		transform.position.y = tallCoefficient * 5.0;
		transform.position.x = Random.Range(-3.0 , 3.0);
		fallSpeed = fallCoefficient * Random.Range(0.2 , 1);
		rotateSpeed = rotateCoefficient * Vector3(Random.Range(5.0 , 50),Random.Range(5.0 , 50),Random.Range(5.0 , 50));
}

function Update () {

	transform.position.y -= fallSpeed * Time.deltaTime;
	transform.Rotate(rotateSpeed * Time.deltaTime);
	if (transform.position.y < - tallCoefficient * 5.0) Start ();

}