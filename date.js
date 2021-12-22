class Date {
    day;
    month;
    year;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(day){
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day,month,year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString(){
        if(this.day<10){
            this.day = '0'+ this.day;
        } else {
            this.day = this.day.toString();
        }
        if(this.month<10){
            this.month = '0'+ this.month;
        } else {
            this.month = this.month.toString();
        }
        this.year = this.year.toString();
        return this.day + '/' + this.month + '/' + this.year;
        }

}

