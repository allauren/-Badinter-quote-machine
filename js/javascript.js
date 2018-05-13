var quotes = [
"Les amis qui s'éloignent emmènent avec eux une part de nos souvenirs, c'est-à-dire de nous-mêmes. ",
"La paix, la vraie paix, celle de l'âme, commence avec la reconnaissance de nos erreurs passées.",
"La justice française ne peut plus être une justice qui tue.Interview dans \"Le Monde\" - 28 août 1981 ",
"Le courage, pour un avocat, c'est l'essentiel, ce sans quoi le reste ne compte pas : talent, culture, connaissance du droit, tout est utile à l'avocat. Mais sans le courage, au moment décisif, il n'y a plus que des mots, des phrases, qui se suivent, qui brillent et qui meurent. Défendre, ce n'est pas tirer un feu d'artifice : la belle bleue, la belle rouge, et le bouquet qui monte, qui explose et retombe en mille fleurs. Puis le silence et la nuit reviennent et il ne reste rien ",
"Si vous votez comme Monsieur l'avocat général vous le demande, je vous le dis, le temps passera, c'en sera fini du tumulte, des encouragements, vous demeurerez seul avec votre décision. On abolira la peine de mort, et vous resterez seul avec votre verdict, pour toujours. Et vos enfants sauront que vous avez un jour condamné à mort un jeune homme. Et vous verrez leur regard ! ",
"Utiliser contre les terroristes la peine de mort, c'est, pour une démocratie, faire sienne les valeurs de ces derniers.",
" Je ne demande que le silence que les morts appellent. ",
"\"L'avocat ne mérite pas l'habit de lumière, disaît mon maître, enfant du Sud-Ouest et grand amateur de corridas (que je réprouvais pour ma part). Il est tout au plus bon à porter le deuil de son client. D'ailleurs, il est déjà prêt,dans sa robe noire !\" Et il ajoutait en souriant de l'excès du propos : \"Tandis que l'avocat général [Le procureur], lui, mérite bien sa robe rouge : elle est couleur de sang\".",
"Je voulais lui rendre cette part d'humanité souffrante que le criminel même le plus endurci porte en lui. Tout homme est d'abord l'enfant qu'il fut. ",
"Au Moyen Age on mettait les lépreux à l'écart des villes, on les obligeait à porter des clochettes comme du bétail, pour qu'on les entende venir et puisse s'en écarter à temps. Il n'y avait pas de lépreux visibles. Mais la lèpre était toujours là, bien vivace, dans l'ombre. Nous en sommes encore au Moyen Âge quand il s'agit du crime, cette lèpre de la société. ",
"Puisque la preuve était établie que lorsque vacillait ou s'éteignait la flamme de la liberté, la France plongeait dans la honte ou la barbarie, je mesurais toute politique à cette aune. ",
"L'avocat retourne à son banc. Qu'a-t-il fait réellement pour l'homme qu'il défend? Quand il a fait son métier, il lui est aisé de se dire qu'il a tout tenté, et que la décision ne le regarde plus, sauf pour son palmarès. C'est là le piège le plus subtil -Celui où se prend le plus aisément l'avocat. La bonne conscience lui est si facile. À lui qui ne requiert pas -qui ne juge pas- qui ne décide pas. À lui qui est toujours du bon côté de la barrière. ",
]

function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
