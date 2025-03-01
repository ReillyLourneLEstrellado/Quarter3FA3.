function generateBot() {
    let num1 = Math.ceil(Math.random() * 20); // Attack Power
    let num2 = Math.ceil(Math.random() * 20); // Defense Level
    let num3 = Math.ceil(Math.random() * 20); // Speed
    
    let biggest = Math.max(num1, num2, num3);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = num1 <= 26 ? alphabet[num1 - 1] : "?";
    
    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    
    document.getElementById("result").innerHTML = `
        <p>Your battle bot has been assembled!</p>
        <p><strong>Attack Power:</strong> ${num1}, <strong>Defense Level:</strong> ${num2}, <strong>Speed:</strong> ${num3}</p>
        <p>The most dominant stat is <strong>${biggest}</strong>.</p>
        <p>Model designation starts with: <strong>${letter}</strong>.</p>
        <p>Estimated charging time: <strong>${totalMinutes} minutes</strong> (${hours} hours and ${minutes} minutes).</p>
    `;
}
