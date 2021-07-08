let charWeapon = {
  knife: 5,
  sword: 10,
  longSword: 15,
};

function User(charName, streng, charWeapon) {
  let user = {};
  user.charName = charName;
  user.streng = streng;
  user.charWeapon = charWeapon;

  user.getAtk = function () {
    return this.streng * 0.8 + this.charWeapon;
  };

  user.damage = function () {
    console.log("Sát thương gây ra là " + this.getAtk());
  };
  return user;
}

let nghia = User("Nghĩa", 10, charWeapon["longSword"]);

function Character(name) {
  this.name = name;
  this.level = 1;
  this.weapon = hand;
  this.critRate = 0.2;

  this.attack = function () {
    let rate = Math.random();
    let isCrit = rate <= this.critRate;

    if (isCrit) {
      console.log("Tấn công bới " + this.weapon);
      console.log("CHÍ MẠNG!!! Sát thương gây ra " + this.weapon.damage * 2);
    } else {
      console.log("Tấn công bởi " + this.weapon);
      console.log("Sát thương gây ra " + this.weapon.damage);
    }
  };
  this.changeWeapon = function (weapon) {
    if (typeof weapon === "object" && weapon instanceof Weapon) {
    }
  };
  return this;
}

function Weapon(type, name, damage) {
  this.type = type;
  this.name = name;
  this.damage = damage;

  this.toString = function () {
    return this.type + "-" + this.name;
  };
  return this
}

let hand = new Weapon("Hand", "Righthand", 1);
let knife = new Weapon ("Knife", "Thái Lan", 1000000);
