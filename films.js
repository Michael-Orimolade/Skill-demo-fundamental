module.export = class Films{



constructor (name) {

    this.name = name


}

showAllMovies() {
    var i, len, text
    for (i = 0, len = films.length, text = ""; i < len; i++ ){
        text += i + 1 + ": " + films[i].title + " (Age " + films[i].ageRating + "+)\n"
    }
     return text
                 
}
under18 () {
    var filteredMovies = films.filter(films => films.ageRating <= this.age)
    return this.mySolution(filteredMovies)
 }


}