"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var m = require("./module");
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.toString = function () {
        console.log("nom:" + this.nom + ", prenom:" + this.prenom);
    };
    return Personne;
}());
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(nom, prenom, age) {
        var _this = _super.call(this, nom, prenom) || this;
        _this.age = age;
        return _this;
    }
    Etudiant.prototype.toString = function () {
        _super.prototype.toString.call(this);
        console.log("age:" + this.age);
    };
    return Etudiant;
}(Personne));
var etud = new Etudiant("AZIKI", "Abdellatif", 50);
etud.toString();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.f2 = function (p1, p2) {
        throw new Error("Method not implemented.");
    };
    A.prototype.f1 = function (p1, p2) {
        throw new Error("Method not implemented.");
    };
    return A;
}());
console.log(function () {
    return "abdellatif aziki";
});
console.log(m.y);
function f2(p1, p2) {
    if (typeof (p1) == "string") {
        console.log("string :" + p1 + "," + p2);
    }
    else if (typeof (p1) == "number" && typeof (p2) == "number") {
        console.log("number :" + (p1 + p2));
    }
}
f2(5, 7);
f2("ab", "az");
