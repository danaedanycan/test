function fibonacci(n) {
    let fib = [0, 1]; // Initialisation des deux premiers éléments de la suite de Fibonacci

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calcul du terme suivant de la suite
    }

    return fib.slice(0, n); // Retourne les n premiers éléments de la suite de Fibonacci
}

// Exemple d'utilisation :
const n = 10; // Nombre d'éléments de la suite de Fibonacci à générer
console.log(fibonacci(n)); // Affiche les 10 premiers éléments de la suite de Fibonacci
