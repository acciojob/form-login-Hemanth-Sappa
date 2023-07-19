function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByTagName("input")[0].name;
	let lastName = document.getElementsByTagName("input")[1].name;

	let fullName = firstName+" "+ lastName;

	alert(fullName);
}
