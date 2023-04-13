// 1. Buatlah fungsi callback untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan.
// 2. Buatlah promise untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan, boleh dengan mengubah fungsi callback pada nomor 1 untuk dijadikan promise.

// 3. Dengan menggunakan:
// 1) Callback pada nomor 1;
// 2) Promise pada nomor 2;
// 3) Async await menggunakan promise pada nomor 2.

// Selesaikan permasalahan matematika di bawah ini:



// a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
// b. 500 - 625 / 5 + 84 / 12 * 96 / 12
// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
// f. 500 / 100 * 20 + 84 * 2 - 125 / 5
// g. 375 * 2 - 750 / 25 + 1000 / 500
// h. 12 * 12 * 2 - 84 + 96 ** 2
// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2

console.log('===== Callback =====')
const hitungCallback = (num1, num2, operator, callback) => {
    if (operator == '+'){
        return callback(num1 + num2);
    } else if (operator == '-'){
        return callback(num1 - num2)
    } else if (operator == '*'){
        return callback(num1 * num2)
    } else if (operator == '/'){
        return callback(num1 / num2)
    } else if (operator == '**'){
        return callback(num1 ** num2)
    } else {
        console.log('Operator salah');
        console.log(operator)
        console.log(num1)
        console.log(num2)
    }
}

const hitungCallbackA = () => {
    let soal = [375, '/', 125, '*', 3, '**', 2, '-', 750, '+', 96, '*', 10, '*', 84, '/', 12]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                hitungCallback(result7, soal[16], soal[15], (result8 => {
                                    console.log('a. ', result8)
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackA()

const hitungCallbackB = () => {
    let soal = [500, '-', 625, '/', 5, '+', 84, '/', 12, '*', 96, '/', 12]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            console.log('b. ', result6)
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackB()

const hitungCallbackC = () => {
    let soal = [750, '/', 2, '+', 125, '/', 5, '*', 96, '/', 12, '+', 375, '*', 84]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('c. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackC()

const hitungCallbackD = () => {
    let soal = [1000, '-', 750, '/', 125, '-', 12, '+', 96, '*', 10, '*', 500, '/', 250]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('d. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackD()

const hitungCallbackE = () => {
    let soal = [36, '**', 2, '/', 72, '+', 125, '*', 10, '-', 24, '*', 3]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            console.log('e. ', result6)
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackE()

const hitungCallbackF = () => {
    let soal = [500, '/', 100, '*', 20, '+', 84, '*', 2, '-', 125, '/', 5]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            console.log('f. ', result6)
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackF()

const hitungCallbackG = () => {
    let soal = [375, '*', 2, '-', 750, '/', 25, '+', 1000, '/', 500]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        console.log('G. ', result5)
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackG()

const hitungCallbackH = () => {
    let soal = [12, '*', 12, '*', 2, '-', 84, '+', 96, '**', 2]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        console.log('H. ', result5)
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackH()

const hitungCallbackI = () => {
    let soal = [750, '/', 25, '*', 375, '/', 125, '*', 72, '/', 12, '+', 84, '*', 12]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('i. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackI()

const hitungCallbackJ = () => {
    let soal = [96, '/', 12, '**', 2, '+', 625, '/', 5, '-', 375, '*', 84]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            console.log('j. ', result6)
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackJ()

const hitungCallbackK = () => {
    let soal = [250, '/', 25, '*', 10, '+', 36, '**', 2, '/', 72, '-', 125, '*', 10]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('k. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackK()

const hitungCallbackL = () => {
    let soal = [375, '/', 125, '*', 100, '+', 500, '/', 250, '*', 50, '-', 96, '*', 10]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('l. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackL()

const hitungCallbackM = () => {
    let soal = [750, '/', 25, '-', 375, '/', 125, '+', 96, '**', 2, '/', 12, '**', 2]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('m. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackM()

const hitungCallbackN = () => {
    let soal = [1000, '/', 500, '*', 375, '/', 125, '*', 72, '/', 12, '-', 84, '*', 12]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                console.log('n. ', result7)
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackN()

const hitungCallbackO = () => {
    let soal = [96, '/', 12, '**', 2, '-', 500, '/', 250, '*', 375, '/', 125, '+', 84, '*', 2]
    hitungCallback(soal[0], soal[2], soal[1], (result1) => {
        hitungCallback(result1, soal[4], soal[3], (result2 => {
            hitungCallback(result2, soal[6], soal[5], (result3 => {
                hitungCallback(result3, soal[8], soal[7], (result4 => {
                    hitungCallback(result4, soal[10], soal[9], (result5 => {
                        hitungCallback(result5, soal[12], soal[11], (result6 => {
                            hitungCallback(result6, soal[14], soal[13], (result7 => {
                                hitungCallback(result7, soal[16], soal[15], (result8 => {
                                    console.log('o. ', result8)
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        }))
    })
}
hitungCallbackO()

console.log('===== Promise and Async/await =====')
const hitungPromise = (num1, num2, operator) => {
    return new Promise((resolve, reject) => {
        if (operator == '+'){
            resolve (num1 + num2)
        } else if (operator == '-'){
            resolve (num1 - num2)
        } else if (operator == '*'){
            resolve (num1 * num2)
        } else if (operator == '/'){
            resolve (num1 / num2)
        } else if (operator == '**'){
            resolve (num1 ** num2)
        } else {
            reject (console.log('Operator salah', num1, num2, operator))
        }
    })
}

let soalA = [375, '/', 125, '*', 3, '**', 2, '-', 750, '+', 96, '*', 10, '*', 84, '/', 12]
hitungPromise(soalA[0], soalA[2], soalA[1])
    .then(result => {
        return hitungPromise(result, soalA[4], soalA[3])
    })
    .then(result => {
        return hitungPromise(result, soalA[6], soalA[5])
    })
    .then(result => {
        return hitungPromise(result, soalA[8], soalA[7])
    })
    .then(result => {
        return hitungPromise(result, soalA[10], soalA[9])
    })
    .then(result => {
        return hitungPromise(result, soalA[12], soalA[11])
    })
    .then(result => {
        return hitungPromise(result, soalA[14], soalA[13])
    })
    .then(result => {
        return hitungPromise(result, soalA[16], soalA[15])
    })
    .then(result => {
        console.log('promise a. ',result)
    })
    .catch(err => {
        return err
    })

let soalB = [500, '-', 625, '/', 5, '+', 84, '/', 12, '*', 96, '/', 12]
hitungPromise(soalB[0], soalB[2], soalB[1])
    .then(result => {
        return hitungPromise(result, soalB[4], soalB[3])
    })
    .then(result => {
        return hitungPromise(result, soalB[6], soalB[5])
    })
    .then(result => {
        return hitungPromise(result, soalB[8], soalB[7])
    })
    .then(result => {
        return hitungPromise(result, soalB[10], soalB[9])
    })
    .then(result => {
        return hitungPromise(result, soalB[12], soalB[11])
    })
    .then(result => {
        console.log('promise b. ', result)
    })
    .catch(err => {
        return err
    }) 


let soalC = [750, '/', 2, '+', 125, '/', 5, '*', 96, '/', 12, '+', 375, '*', 84]
hitungPromise(soalC[0], soalC[2], soalC[1])
    .then(result => {
        return hitungPromise(result, soalC[4], soalC[3])
    })
    .then(result => {
        return hitungPromise(result, soalC[6], soalC[5])
    })
    .then(result => {
        return hitungPromise(result, soalC[8], soalC[7])
    })
    .then(result => {
        return hitungPromise(result, soalC[10], soalC[9])
    })
    .then(result => {
        return hitungPromise(result, soalC[12], soalC[11])
    })
    .then(result => {
        return hitungPromise(result, soalC[14], soalC[13])
    })
    .then(result => {
        console.log('promise c. ', result)
    })
    .catch(err => {
        return err
    }) 
    

let soalD = [1000, '-', 750, '/', 125, '-', 12, '+', 96, '*', 10, '*', 500, '/', 250]
hitungPromise(soalD[0], soalD[2], soalD[1])
    .then(result => {
        return hitungPromise(result, soalD[4], soalD[3])
    })
    .then(result => {
        return hitungPromise(result, soalD[6], soalD[5])
    })
    .then(result => {
        return hitungPromise(result, soalD[8], soalD[7])
    })
    .then(result => {
        return hitungPromise(result, soalD[10], soalD[9])
    })
    .then(result => {
        return hitungPromise(result, soalD[12], soalD[11])
    })
    .then(result => {
        return hitungPromise(result, soalD[14], soalD[13])
    })
    .then(result => {
        console.log('promise d. ',result)
    })
    .catch(err => {
        return err
    }) 
        

let soalE = [36, '**', 2, '/', 72, '+', 125, '*', 10, '-', 24, '*', 3]
hitungPromise(soalE[0], soalE[2], soalE[1])
    .then(result => {
        return hitungPromise(result, soalE[4], soalE[3])
    })
    .then(result => {
        return hitungPromise(result, soalE[6], soalE[5])
    })
    .then(result => {
        return hitungPromise(result, soalE[8], soalE[7])
    })
    .then(result => {
        return hitungPromise(result, soalE[10], soalE[9])
    })
    .then(result => {
        return hitungPromise(result, soalE[12], soalE[11])
    })
    .then(result => {
        console.log('promise e. ', result)
    })
    .catch(err => {
        return err
    }) 
            

let soalF = [500, '/', 100, '*', 20, '+', 84, '*', 2, '-', 125, '/', 5]
hitungPromise(soalF[0], soalF[2], soalF[1])
    .then(result => {
        return hitungPromise(result, soalF[4], soalF[3])
    })
    .then(result => {
        return hitungPromise(result, soalF[6], soalF[5])
    })
    .then(result => {
        return hitungPromise(result, soalF[8], soalF[7])
    })
    .then(result => {
        return hitungPromise(result, soalF[10], soalF[9])
    })
    .then(result => {
        return hitungPromise(result, soalF[12], soalF[11])
    })
    .then(result => {
        console.log('promise f. ', result)
    })
    .catch(err => {
        return err
    }) 
                

let soalG = [375, '*', 2, '-', 750, '/', 25, '+', 1000, '/', 500]
hitungPromise(soalG[0], soalG[2], soalG[1])
    .then(result => {
        return hitungPromise(result, soalG[4], soalG[3])
    })
    .then(result => {
        return hitungPromise(result, soalG[6], soalG[5])
    })
    .then(result => {
        return hitungPromise(result, soalG[8], soalG[7])
    })
    .then(result => {
        return hitungPromise(result, soalG[10], soalG[9])
    })
    .then(result => {
        console.log('promise g. ', result)
    })
    .catch(err => {
        return err
    }) 
                    

let soalH = [12, '*', 12, '*', 2, '-', 84, '+', 96, '**', 2]
hitungPromise(soalH[0], soalH[2], soalH[1])
    .then(result => {
        return hitungPromise(result, soalH[4], soalH[3])
    })
    .then(result => {
        return hitungPromise(result, soalH[6], soalH[5])
    })
    .then(result => {
        return hitungPromise(result, soalH[8], soalH[7])
    })
    .then(result => {
        return hitungPromise(result, soalH[10], soalH[9])
    })
    .then(result => {
        console.log('promise h. ', result)
    })
    .catch(err => {
        return err
    }) 
                        

let soalI = [750, '/', 25, '*', 375, '/', 125, '*', 72, '/', 12, '+', 84, '*', 12]
hitungPromise(soalI[0], soalI[2], soalI[1])
    .then(result => {
        return hitungPromise(result, soalI[4], soalI[3])
    })
    .then(result => {
        return hitungPromise(result, soalI[6], soalI[5])
    })
    .then(result => {
        return hitungPromise(result, soalI[8], soalI[7])
    })
    .then(result => {
        return hitungPromise(result, soalI[10], soalI[9])
    })
    .then(result => {
        return hitungPromise(result, soalI[12], soalI[11])
    })
    .then(result => {
        return hitungPromise(result, soalI[14], soalI[13])
    })
    .then(result => {
        console.log('promise i. ', result)
    })
    .catch(err => {
        return err
    }) 
                            

let soalJ = [96, '/', 12, '**', 2, '+', 625, '/', 5, '-', 375, '*', 84]
hitungPromise(soalJ[0], soalJ[2], soalJ[1])
    .then(result => {
        return hitungPromise(result, soalJ[4], soalJ[3])
    })
    .then(result => {
        return hitungPromise(result, soalJ[6], soalJ[5])
    })
    .then(result => {
        return hitungPromise(result, soalJ[8], soalJ[7])
    })
    .then(result => {
        return hitungPromise(result, soalJ[10], soalJ[9])
    })
    .then(result => {
        return hitungPromise(result, soalJ[12], soalJ[11])
    })
    .then(result => {
        console.log('promise j. ', result)
    })
    .catch(err => {
        return err
    }) 
                                

let soalK = [250, '/', 25, '*', 10, '+', 36, '**', 2, '/', 72, '-', 125, '*', 10]
hitungPromise(soalK[0], soalK[2], soalK[1])
    .then(result => {
        return hitungPromise(result, soalK[4], soalK[3])
    })
    .then(result => {
        return hitungPromise(result, soalK[6], soalK[5])
    })
    .then(result => {
        return hitungPromise(result, soalK[8], soalK[7])
    })
    .then(result => {
        return hitungPromise(result, soalK[10], soalK[9])
    })
    .then(result => {
        return hitungPromise(result, soalK[12], soalK[11])
    })
    .then(result => {
        return hitungPromise(result, soalK[14], soalK[13])
    })
    .then(result => {
        console.log('promise k. ', result)
    })
    .catch(err => {
        return err
    }) 
                                    

let soalL = [375, '/', 125, '*', 100, '+', 500, '/', 250, '*', 50, '-', 96, '*', 10]
hitungPromise(soalL[0], soalL[2], soalL[1])
    .then(result => {
        return hitungPromise(result, soalL[4], soalL[3])
    })
    .then(result => {
        return hitungPromise(result, soalL[6], soalL[5])
    })
    .then(result => {
        return hitungPromise(result, soalL[8], soalL[7])
    })
    .then(result => {
        return hitungPromise(result, soalL[10], soalL[9])
    })
    .then(result => {
        return hitungPromise(result, soalL[12], soalL[11])
    })
    .then(result => {
        return hitungPromise(result, soalL[14], soalL[13])
    })
    .then(result => {
        console.log('promise l. ', result)
    })
    .catch(err => {
        return err
    }) 
                                        

let soalM = [750, '/', 25, '-', 375, '/', 125, '+', 96, '**', 2, '/', 12, '**', 2]
hitungPromise(soalM[0], soalM[2], soalM[1])
    .then(result => {
        return hitungPromise(result, soalM[4], soalM[3])
    })
    .then(result => {
        return hitungPromise(result, soalM[6], soalM[5])
    })
    .then(result => {
        return hitungPromise(result, soalM[8], soalM[7])
    })
    .then(result => {
        return hitungPromise(result, soalM[10], soalM[9])
    })
    .then(result => {
        return hitungPromise(result, soalM[12], soalM[11])
    })
    .then(result => {
        return hitungPromise(result, soalM[14], soalM[13])
    })
    .then(result => {
        console.log('promise m. ', result)
    })
    .catch(err => {
        return err
    }) 
                                            

let soalN =  [1000, '/', 500, '*', 375, '/', 125, '*', 72, '/', 12, '-', 84, '*', 12]
hitungPromise(soalN[0], soalN[2], soalN[1])
    .then(result => {
        return hitungPromise(result, soalN[4], soalN[3])
    })
    .then(result => {
        return hitungPromise(result, soalN[6], soalN[5])
    })
    .then(result => {
        return hitungPromise(result, soalN[8], soalN[7])
    })
    .then(result => {
        return hitungPromise(result, soalN[10], soalN[9])
    })
    .then(result => {
        return hitungPromise(result, soalN[12], soalN[11])
    })
    .then(result => {
        return hitungPromise(result, soalN[14], soalN[13])
    })
    .then(result => {
        console.log('promise n. ', result)
    })
    .catch(err => {
        return err
    }) 
                                                

let soalO =  [96, '/', 12, '**', 2, '-', 500, '/', 250, '*', 375, '/', 125, '+', 84, '*', 2]
hitungPromise(soalO[0], soalO[2], soalO[1])
    .then(result => {
        return hitungPromise(result, soalO[4], soalO[3])
    })
    .then(result => {
        return hitungPromise(result, soalO[6], soalO[5])
    })
    .then(result => {
        return hitungPromise(result, soalO[8], soalO[7])
    })
    .then(result => {
        return hitungPromise(result, soalO[10], soalO[9])
    })
    .then(result => {
        return hitungPromise(result, soalO[12], soalO[11])
    })
    .then(result => {
        return hitungPromise(result, soalO[14], soalO[13])
    })
    .then(result => {
        return hitungPromise(result, soalO[16], soalO[15])
    })
    .then(result => {
        console.log('promise o. ', result)
    })
    .catch(err => {
        return err
    }) 

const hitungAsyncAwaitA = async() => {
    let result = await hitungPromise(375, 125, '/')
    result = await hitungPromise(result, 3, '*')
    result = await hitungPromise(result, 2, '**')
    result = await hitungPromise(result, 750, '-')
    result = await hitungPromise(result, 96, '+')
    result = await hitungPromise(result, 10, '*')
    result = await hitungPromise(result, 84, '*')
    result = await hitungPromise(result, 12, '/')
    return result
}

const printAsyncAwaitA = async() => {
    let result = await hitungAsyncAwaitA()
    console.log('async/await a. ',result)
}
printAsyncAwaitA()

const hitungAsyncAwaitB = async() => {
    let result = await hitungPromise(500, 625, '-')
    result = await hitungPromise(result, 5, '/')
    result = await hitungPromise(result, 84, '+')
    result = await hitungPromise(result, 12, '/')
    result = await hitungPromise(result, 96, '*')
    result = await hitungPromise(result, 12, '/')
    return result
}

const printAsyncAwaitB = async() => {
    let result = await hitungAsyncAwaitB()
    console.log('async/await b. ',result)
}
printAsyncAwaitB()

const hitungAsyncAwaitC = async() => {
    let result = await hitungPromise(750, 2, '/')
    result = await hitungPromise(result, 125, '+')
    result = await hitungPromise(result, 5, '/')
    result = await hitungPromise(result, 96, '*')
    result = await hitungPromise(result, 12, '/')
    result = await hitungPromise(result, 375, '+')
    result = await hitungPromise(result, 84, '*')
    return result
}

const printAsyncAwaitC = async() => {
    let result = await hitungAsyncAwaitC()
    console.log('async/await c. ',result)
}
printAsyncAwaitC()

const hitungAsyncAwaitD = async() => {
    let result = await hitungPromise(1000, 750, '-')
    result = await hitungPromise(result, 125, '/')
    result = await hitungPromise(result, 12, '-')
    result = await hitungPromise(result, 96, '+')
    result = await hitungPromise(result, 10, '*')
    result = await hitungPromise(result, 500, '*')
    result = await hitungPromise(result, 250, '/')
    return result
}

const printAsyncAwaitD = async() => {
    let result = await hitungAsyncAwaitD()
    console.log('async/await d. ',result)
}
printAsyncAwaitD()

const hitungAsyncAwaitE = async() => {
    let result = await hitungPromise(36, 2, '**')
    result = await hitungPromise(result, 72, '/')
    result = await hitungPromise(result, 125, '+')
    result = await hitungPromise(result, 10, '*')
    result = await hitungPromise(result, 24, '-')
    result = await hitungPromise(result, 3, '*')
    return result
}

const printAsyncAwaitE = async() => {
    let result = await hitungAsyncAwaitE()
    console.log('async/await e. ',result)
}
printAsyncAwaitE()

const hitungAsyncAwaitF = async() => {
    let result = await hitungPromise(500, 100, '/')
    result = await hitungPromise(result, 20, '*')
    result = await hitungPromise(result, 84, '+')
    result = await hitungPromise(result, 2, '*')
    result = await hitungPromise(result, 125, '-')
    result = await hitungPromise(result, 5, '/')
    return result
}

const printAsyncAwaitF = async() => {
    let result = await hitungAsyncAwaitF()
    console.log('async/await f. ',result)
}
printAsyncAwaitF()

const hitungAsyncAwaitG = async() => {
    let result = await hitungPromise(375, 2, '*')
    result = await hitungPromise(result, 750, '-')
    result = await hitungPromise(result, 25, '/')
    result = await hitungPromise(result, 1000, '+')
    result = await hitungPromise(result, 500, '/')
    return result
}

const printAsyncAwaitG = async() => {
    let result = await hitungAsyncAwaitG()
    console.log('async/await g. ',result)
}
printAsyncAwaitG()

const hitungAsyncAwaitH = async() => {
    let result = await hitungPromise(12, 12, '*')
    result = await hitungPromise(result, 2, '*')
    result = await hitungPromise(result, 84, '-')
    result = await hitungPromise(result, 96, '+')
    result = await hitungPromise(result, 2, '**')
    return result
}

const printAsyncAwaitH = async() => {
    let result = await hitungAsyncAwaitH()
    console.log('async/await h. ',result)
}
printAsyncAwaitH()

const hitungAsyncAwaitI = async() => {
    let result = await hitungPromise(750, 25, '/')
    result = await hitungPromise(result, 375, '*')
    result = await hitungPromise(result, 125, '/')
    result = await hitungPromise(result, 72, '*')
    result = await hitungPromise(result, 12, '/')
    result = await hitungPromise(result, 84, '+')
    result = await hitungPromise(result, 12, '*')
    return result
}

const printAsyncAwaitI = async() => {
    let result = await hitungAsyncAwaitI()
    console.log('async/await i. ',result)
}
printAsyncAwaitI()

const hitungAsyncAwaitJ = async() => {
    let result = await hitungPromise(96, 12, '/')
    result = await hitungPromise(result, 2, '**')
    result = await hitungPromise(result, 625, '+')
    result = await hitungPromise(result, 5, '/')
    result = await hitungPromise(result, 375, '-')
    result = await hitungPromise(result, 84, '*')
    return result
}

const printAsyncAwaitJ = async() => {
    let result = await hitungAsyncAwaitJ()
    console.log('async/await j. ',result)
}
printAsyncAwaitJ()

const hitungAsyncAwaitK = async() => {
    let result = await hitungPromise(250, 25, '/')
    result = await hitungPromise(result, 10, '*')
    result = await hitungPromise(result, 36, '+')
    result = await hitungPromise(result, 2, '**')
    result = await hitungPromise(result, 72, '/')
    result = await hitungPromise(result, 125, '-')
    result = await hitungPromise(result, 10, '*')
    return result
}

const printAsyncAwaitK = async() => {
    let result = await hitungAsyncAwaitK()
    console.log('async/await k. ',result)
}
printAsyncAwaitK()

const hitungAsyncAwaitL = async() => {
    let result = await hitungPromise(375, 125, '/')
    result = await hitungPromise(result, 100, '*')
    result = await hitungPromise(result, 500, '+')
    result = await hitungPromise(result, 250, '/')
    result = await hitungPromise(result, 50, '*')
    result = await hitungPromise(result, 96, '-')
    result = await hitungPromise(result, 10, '*')
    return result
}

const printAsyncAwaitL = async() => {
    let result = await hitungAsyncAwaitL()
    console.log('async/await l. ',result)
}
printAsyncAwaitL()

const hitungAsyncAwaitM = async() => {
    let result = await hitungPromise(750, 25, '/')
    result = await hitungPromise(result, 375, '-')
    result = await hitungPromise(result, 125, '/')
    result = await hitungPromise(result, 96, '+')
    result = await hitungPromise(result, 2, '**')
    result = await hitungPromise(result, 12, '/')
    result = await hitungPromise(result, 2, '**')
    return result
}

const printAsyncAwaitM = async() => {
    let result = await hitungAsyncAwaitM()
    console.log('async/await m. ',result)
}
printAsyncAwaitM()

const hitungAsyncAwaitN = async() => {
    let result = await hitungPromise(1000, 500, '/')
    result = await hitungPromise(result, 375, '*')
    result = await hitungPromise(result, 125, '/')
    result = await hitungPromise(result, 72, '*')
    result = await hitungPromise(result, 12, '/')
    result = await hitungPromise(result, 84, '-')
    result = await hitungPromise(result, 12, '*')
    return result
}

const printAsyncAwaitN = async() => {
    let result = await hitungAsyncAwaitN()
    console.log('async/await n. ',result)
}
printAsyncAwaitN()

const hitungAsyncAwaitO = async() => {
    let result = await hitungPromise(96, 12, '/')
    result = await hitungPromise(result, 2, '**')
    result = await hitungPromise(result, 500, '-')
    result = await hitungPromise(result, 250, '/')
    result = await hitungPromise(result, 375, '*')
    result = await hitungPromise(result, 125, '/')
    result = await hitungPromise(result, 84, '+')
    result = await hitungPromise(result, 2, '*')
    return result
}

const printAsyncAwaitO = async() => {
    let result = await hitungAsyncAwaitO()
    console.log('async/await o. ',result)
}
printAsyncAwaitO()