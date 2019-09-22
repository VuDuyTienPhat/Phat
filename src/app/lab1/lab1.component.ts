import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css']
})
export class Lab1Component implements OnInit {
   // bài 3 - lab1:
   student = {
    fullName: 'Nguyễn Văn Tèo', 
    birthday: '20-01-1999', gender: 'Nam', 
    photo: '../assets/hinhanh/teo.jpg', 
    mark: 8.5
  }
  students = [
    { fullName: 'Nguyễn Văn Tèo', birthday: '20-01-1999', gender: 'Nam', photo: '../assets/hinhanh/teo.jpg', mark: 8.5 },
    { fullName: 'Phan thị nở', birthday: '20-12-1999', gender: 'Nữ', photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFRUXFxUYFxgYFhgVGRYWFhUYFxcXFxUZHSggGBonHRgWIjEhJSktMC4uGCAzODMsNygtLisBCgoKDg0OGxAQGy8lICUrLy01Mi8tLS0yLy03Ky81Ly0tLS0tLS0tLy0vLTcrKystLS0vLy0tLS0tLS8tLS0tLf/AABEIAPEA0QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBAYHAwj/xABFEAACAQIEAwQGBgYHCQAAAAABAgADEQQSITEFBkETIlFhByMycYGRQlJicoKhFDOSscHhJEOisrPC0RVTY3ODo8Pw8f/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACgRAAMAAgIBAgcAAwEAAAAAAAABAgMREiExBHETFCJBUWGBMqHwBf/aAAwDAQACEQMRAD8A7jERAEpm1tKM0pTgF8REAREQBERAESwn4Rf4wC+IiAIiIAiIgCIlrNAK5he3WVnmm89IAiIgCIiAIiIAlrGVaeaiAVUXnoBAEQBERAEREAS19pdEAtlLylVgoJJAUAkkmwA6kk9JyPmX0gYo1WTDVqPZ3NnpKTpfYvVWzadUFvORqlPklMOvB19RKz56r8w4pvbr1GJ6F2I+V7CUpccxC6rWqKfJ2X+6ZV8b9FnwX+Tu2A41QrVKtFH9bSJDoQVYW6gMBddR3hcaiSE+e249iDiExXaeuSwDWAuBfRre0CCQb6kaX0EncHzzVqYgPjK9anRBuEw4VVvfQMb5ynj7RPlOrKvuHhf2OzxMPhXFKOJpirQqLUQ6XU7EbgjdT5HWZZlxSUYywC8KP5z0AgFQIiIAiIgCIiAIiIAiIgCIiAImPj8WtGm9V75UVnNtTZQSQB1Ok07iuNqV+zavTp9iL5lDdoAzWAaoGUXC6i4+te2lxXkyqF2WY8Tt9G8xNb4Dj1psaRf1bWNIsSQGJs1MOdLaqVF+rAaAAbJJRapbRG4cvTExuI46nQpPWqtlRBdj+4AdSTYAdSRMmah6SeHGrh87VMtCir1HQe1VqAAUkDbKLk3JB3GnUdp6RyVtnOObObK2OYg3SgD3aQO9tmqW9putth08Tr8tGgnirM7BVUkmwUW1JJ6TG3vtm1LXSPRKgLEe6Xg31k7zBy0cNhqNQC7AntSOue1vgCAo+9NfpUmVFcj1bsyqfBlsSPzB8/hIqkyTnR6TI4dijSqLUUlSpuGG6nxH+nUXB0MwlutswsGvlPQ2NjY/+7+cvptcXnTh9A8rcTXE0BVCqr3IqBRb1gAufiMpF+hEl5zL0R8Q79WiTugb9hst/k6j8M6bNeOtzsx2tVoREguYeIDSijkEn1pQm6IBe2ZfYZiVHQ5SxFrXnapSts5MunpE7E0Th2IalWZ8MlMUwuV7nKjvowYZQSzLqCftW1IsNu4NxAYiktQDKSWDLe9mRijAGwuLg2NhcWPWQx5VfuTyYnHsZsREtKhERAEREAREQBLXcKCSbAAkk9ANzLpR1BBBFwdCPEGAaDxFe2q1az4c1UYqaZdVLCmKaDuqTnTvBja1+9teYNLFKjqSxehlapf2mQoQLOPpAXuDvcai63k9jMJVoMEDDLtTLgkMOiFgbq421vmABGua2HhuE92r2mUtVLlsosBmBGgO+/Xrc9Z5eTfJ8j1MbXFaM9HDrcjusPpDdSOqnpboZsfDQ3Y08982RL33vlF7+c1uvSLIVzFbi11tcabi+nzk3wPiRrIQ4Aq0yFqKNr20dfsMNR8Rupl/pWtsz+pT0iSmnekrEdpgq9ClmeoDSJVVZtEqo7AkC18oJtv85uM5rxWjmpoz65ULstyL1dSxNtb5s1zvf43uz5OC9yrBj5v2Oa8MwjYmrTop9I6nwUasfl+dpvtfgP6PW7ak1KmLKoespcABQq0qNNWU3IW5YknWwvranLXLlSjiRiS2ZKlKpe+jBmdSmm5uouSdb3vvNlxpSlQfGVApIYpTLqzrSQNlZsq6kkhjpuMgmaJeS9I03axRyZStQFeiVqBTmBBAvY9OoBH8PzkTguVUXCPhXbMrMzqbWZCbZdepFt+vhJLgGJ7WhTrBcgqC+UCwUglSFHQaA26EkSRyE90aE6A+BOgMruXFOScWrhUc1wfLtY03wrvROWozKn9aylV9bSfNbS5GQrrYi+oM1/H8MrYRitVbAk5WHstbfL/PX5TqfLmKo4x6tDIqGmWZGVWFSkVyAOajaOxFS5PWzAizWmPzPwpsZhlpgKKnaLcnamVJWpa+9u8LdZfkx1ia2U4ss5V0a96LVqJixXdGWg1N0FQiylmKEC/hcb7X0vednnMOBYYAg6i4ZKgYk5spKnNc+TXG1xppv0ThBY0KJa+bs6d773yi9/OWenyctor9RHHTMozUsOCqDQk273iW+mT4nNe/nebFxXiC0KZcjMbhUUbu59lR/E9ACToDNewyuATUbMxJZjsAzEkhR0UXsL62GpJkfVNdIl6VPtkFi8YKlQdkxSmysajkZf1ZAOVW+nrYlhawvrltPXD0QClWhhytqlNs4CioyB1L952DMCoYa736zLxnCFekUFg12YEi4uzl9R1Fzb3aTIw9OvUbICgbrlUkUwfpOzHXyW1yetgxGWNuujVbXHs23CYlaiK6G6sLjQg+4g6g+R2nrPHCYdaaLTX2VAAubnTqT1PiZ7T1TymIiIAiIgCIiAIlucS6AW1KYYFWAIO4IuD7wZEcW4EHT1LGm4N17zZD9l1v7J8ttCPAzMSNSq8kppz2jQsFiypKupUqbOh3Rt/iOoI0IIImdUZkZa9IZnUWKgj1tM6smul+qnoRuAWvLcw8E7cCpTIWsospPsuu/Z1LfR3sd1JuL3IOucPxliVYFSpyure1Tbcg/MG40IIIuDPPyY6w1teD0ItZp0/Ju2ExK1UWohurAEHyPkdj5HaQHM/CUKFgSM7oGT6LZ3UOR1Ulc17Gx1NrkmefDcV+j1bH9TVbXwp1WOjfdc6HwYg/SYiV5kHqC/1GRz5KrjOfguY/Ca+SyY2zIpePIkRkxgjMppsD2bashsVF7mw37wYA90qNb7zIBkfVqItV+3xBpKVU0wBoct89za4IJW5BGjDwmLHy5fS9GzIlrtbM2qh7NadOyBRZQNLC9zqb6nx3366yzA02p9SdQRdmexHm1z+fymAeL8KXRsaCeoapVP5E6Sh45wjpjAPc9VfzWXPC29uuyCppaUPXsSITsy70lylyTUyWBbQmy3vYk+BXcneVw6WFiNidfrX1Lbk6knc3JuesjMVj8MylcLjGaqdKaEM4Z+ly4zWG512BkuJXl5b+p7JY5leJ1/NFvCOFo9WsHJIujlPokMCLHrbNTYkCwN9bg2m0uwAJJAA1JOgAHUmQXLXeevU6Xp0x55AzEjy9Z+U8ePYrtnOHX9Wtu3P1joVo+YtZm8iq65jbVjajFyZlyS7ycTGbEHEVO3NwgBFFTpZTvVI6M+lr7LbYlhMHiONAFhe1wNBcsxNgqgakk6AdZdxLHBQddNAbaliTYKoGpJNgANSTaS3LvBshFeuPW27ibiipHiNDUI3bp7I0uWyTNZq2aqqcMl/A+BlVL4gnO1vVhjlpjovdNmbxbboNBczlCiqDKihR4AW+PvnpE9GYmVpI8+rdPbEREkREREAREQBLTLpaYAlAfCJcBAKxEQBIPmLgfbetpWWuosL6LUUa9nU8tTZt1J6gsDOTxxeJWkjVKhCoilmJ6KouT8pGpVLTJTTl7Ro+ExKurU6i6ao6ONVOzI4+PuIIIuCDMgcXxasMIootoAlSrnc1ULZbMotqtwGNze4NtbSLxIq1XOKPdqva1Imw7IXyUjb+ssSS2veJHs2E2Hl7h1RnWvXQrkB7Gm1s6lhZqj2vlOW6hdwC19wBlx4rx3peGasmWMkb+6MDDOaQAYEU75VJ1NNgbGjUP1gdA2zCzAm8rxvhoxFLIDZh3qbeDWIBI8DcgjreS3NFb9HoVcSERxlAqI57ri4UG2zNra2mYEC+gnNuCcyYmpX7KkgOY6JmJVdQNC3eUXI3LWvtadv01d1C6Ix6tJpV5FDl+hSPr0HaHc1PZJ+wPZI91z4z0xHBcLW7q0lLf8Id4HpcroPxaTa8Rjsl6OIYU6i2udMp8GXNoVO9vnYzyHF6aKFRzVYlVGUAi7EKo7ui6kamw85n5tdaPSWdtbMbljlsYcmpUOaobhfBFP72PU/AdSZLH4211TU2uTYkKNrm2vlYak2AuSBNX5h45icMwpVQFuoa6d8MDuMzFdjcWt4HrN35QVK9GnWFIU0vmAzFzUcaCo7MMxtqAG2P3VMtn01t7taRhyetmm9PbIyhxLF4fLhVp0czXy3LZ6YYB2q1LXWoQWFwMoLGwNrSmJrpRTIpNh7TaszMx121Z2Y621JPiZPcx8LdiK9AXqBcjroDUp3uAGNgHUkkXNu8w0uCNQTD1WYVgclWm2alTbZSLj1y9SwuD9UHTXWSy4ruuK8EceSInk/Js/LvBCCMRXFnH6unoexBG56GqQSCdlBsOpbZJhcI4iuIpJWUEBgQVO6ODldGt1VgQfdMwzVEqVpGW6dPbAPhL5QCVkiIiIgCIiAIiIAiIgFAJWIgCIiAJ5YnDpURkqKHRhZlYXBHgQZ6xAIOhwyphTfD2qU/909g6jwp1jqw+zUvqfbUC0kcLjEq3AJDD2kYZXX3qem9mGh6EzLkXzItsPVqDR6dKqyMPaRghIKn4DTrsbzng7s0/wBL3EstOjhgfaJqP91NFB8ixv8AgkV6KeDsTUxqgMyN2aKdA11DVCD0axUA7e0Dvddc5w4nUr1c9UgsqhAQLXCk7ja9y206zyRwsU+HUaTXGenmexKtetdj3hqCA1rja0009YJS+/f/AH+jND55XX4R4cRyVaoextUpC1xY3pOyv/fUeHheYlPBg16SXNr528hTBYH9oKPjIri/Mz0KjUK1LN2FS1N0yglCosjpouqMDcWFwvd0mM3OyUnqVKNMu+XJTL91AujM1vaYlgO7p7A11mB+kyPMmp6fZvXq8c4nLrtdFnpGVq1CnXRAKIqFQx9s5lOv2UJUaHW+XbY53og4x6mth3P6tg6fdqXzADyYE/jk/wAT4IanDq9M3apUU1bbDthZwFA0UZlGg8ybkknkvK/EmoYkOljnVk12swDA266qJ6EtPDW/t2efb4Wn9tHauIcUAGpsDoAAWZj4Kq3LHyEwxwiriP1vqafgMrVm97arSB8rtY7qZ78mpmw61n71VzUzOQLlRVcKPJbAaDST0zctro0L8mNw/AU6CCnSQIovoOpO5JOrE9SdTMgCViDoiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJg8dcLhq5IvalU08e4dPjtM6Q3N9TLhH82pL+1VRT+RnKek2cb0tnE8bhzWxFOjc+sqKl/+ZVIv/an0IqgAAaAaD3TiPKtDPxTDKdgSx/BSZh/aAnb5fmfUr8JFWFdN/s0b0jcMVV/SwRplSovVrtZGXxIvYjqPu2Op8pcLp4rFqBoiWdgbjMQ2gAPS9ifl103D0kYjSjS6Xao3wGVQfLvMfwzWOTnFPH07aB1df8/+SacfL5d9mbKp+OujrL6KfIfwnzxicP2OJyWtkrZQPsrUyg/L98+hMWbI3u/fpOF84U7cRqDxqUiPxLTP77zNi/xpfpl+ddL3OzcsKBhKFjf1SEnzIu35kyUkByM98GgPRqo/7rEfvk/M8Pcpl8vaTEREkdEREAREQBERAEREAREQBESmYXt1gFYiIAiIgCQfOg/ojeT0f8ZB/GTkw+L4PtqNSlexZe6TsGGqk+QYAyNLaaONbWjTfRzwW1Wvi2Gt2pU/JQ2ZmHv7g/CfGb9InlbDmnhlVrZg1bNY373bPfXqJLTqbaWzkrS0c355rZsSw+qET5L2n/lkBhKmTEYep4VUHwc5CfkZOc7UCmKYnapZ1P4VpkeZBT5Ms13D02r16dGnuXUk+AU3Yj3AH42E9bFr5f8AjPOy7+P/AFHaay5lI8R/8nJufOG/0vD1gNHFm+9S7yk+ZBt+GdVasEUZt7DSadzPgnqrRSkuZzVsBcD+qqEkk7DSeVTah6/BuyLaJzkhCMHTv1NQ/A1Wt+VpOzG4dhRSpU6Q1CIq38coAvMmclaSRYlpaERE6dESmYXt1lYAiIgCIiAIiIAiJaxgBmltOUUXnqIAiIgCIiAIiUbaAcy4rz4cDjq+GqIzUw4ZDT7zIKiLUbMpNmuzMdLWB6zZeFc40K9uyr02P1T3X/YNj+U5zz3WWnxPE59MwokG3QUEFvmDNVx2BR81VyVU2yi2rab2PjLVhrjtdlLzRy0+jtXN2DbFUbKAKqXKHa9xZkudgdPiFPSRnJPBGw6mtUFqrjQdaafV8mO59wHScdGLrKe5WqIOgWo67C3QiW1sRWcWevUceDO7D5Eyes6nhx690RbwOufLv2Z3Pi3MmFw9+2roG3yg53/YW5kZydzX/tDHZKVIrRoo9TOxGZnPq1GUaBbO53J0G3XjC0QoNvCdG9Bq/wBKxB8KKj5uP9JG8Vqd10djNDvjPf7OzxESkvEtZoYywC8Aqk9IAiAIiIAiIgCIiAUM81H856xAKASsRAEREAREQBERAOJ+l5KY4gDc5uxpltL/AEnAHvsBNJxWJNRrn4Dwkvz3ju24hiXvcCoUHupAU9PK6k/GQU9PCtQjy8z3b0Il+Gw7VaiUqYzO7BVHiWNhPJDcXk+X1cSHH6eRVtp070EKubGG/etQFvs+t1+f7h4zmJm5+hrH9nxDs76VqTrb7SWdfyD/ADlXqFuC3071aO7ShlYnnHpHko/nPQCViAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCUMrEA+aeZeC4nB1SuKTVixFQapU1uWVveRobEXkV2gne+anRsSFdWKpR3VDUA7aofaCgmx7He1tOk03iPA8DUORFpGo5VE7MlSHqMEUlVItYkE36CTXr3D41P9RW/wDz1a5TX8ZDeiPh/bcRVyNKKPU8r27NR/bJ/DIbnDA/o2OxNK3dFRmUfZqesW3uDAfCd55c5UwuBLnDIVNQKGJdnuFva2Ym3tHaYPNPI2Fxhes6HtzTyKwd1AIDZCVBANieu9pb8f6+RX8D6FJ89VD8pt/oy4Dia2Lo4iktqVGoC9RtFtbvIvVmKt001F/PYuEcOwFlZUpKbA2bvuCRsFa5uNpu3J9QdpiEVXC2o1O+pQksHp3CtY29UNwJR888j4qdL8su+RWNcnW3+EbPEROEhERAEREAREQBERAEREAREQBERAEREAREQBEj+NcaoYRO0ruFB0Ubs5teyqNWM5jzN6WiyFMGhpk3HaPlLj7qC6g+ZJ93hGrU+SUw68HScEgqVsSSL5Xp0/gtJamh99UzCqANjKVK/s9pWtfcUwKYBHXvVb+9Jw7gPO+NwecUquYOxdhUHaAud2ue9c9ddZO8icw4jFcZw9Ss+ZmWsmgCgJ2bvYAdMwB8dBILKvBN4X5O7RES0qNd4QiitWoXv2dVuvSqBXUabAdoVt9mZxATFooFg9Crf/pVKeX/ABWnD+J814rCcSxr0HALV6gYMoYEU2KJvqLLpoRI3ivOmNxFWnWeuVakb0+z9WEJ3IA3vsc19LjYkSp5kXLC97PpaJyzl70uKVVcXTObYvTtr5mmSLeeUnyHSdI4XxKliaYq0HDoeo8RuCDqpHgdZOaT8FdQ58mXERJERERAEREAREQBERAERLSYAziXS2UBgF8REAREQD5w9IPHXxWOrFiQtN3pIv1VpsV26XILHzPkJrM+ieZfR7gsa5qur06re09Jgpa2gLKQVJ87XkTg/Q/gUa7viKo+qzqoPvNNFb5GZ3ips0rLKRyLlnlyvj6vZUF21dzcJTHizDqeg3PuBI7TyZ6PaGAYVixrYixAcjKqXFjkS+mhtcknfa9pteAwNLD0xSoU1poNlUADzJtufPeewF5ZONIrvK68Hou0rAiWFRz/AJz9GFLFu1eg/Y1mN2uM1N26kjdSfEaeRM4xxrhFbCVmoV0KONvquvR0b6Snx+BsbifU8wOM8Gw+LTs8RSWovS41U+KsNVPmCDKrxp+C2MrXTPlib56IuOVKWOShclK+ZWG+qozq3vGUi/gx8BN1r+h3As11q4lB9UPTIHuLUyfmZsPK/JGDwBL0UJqEWNR2zNbqBsF87AX6yE46T2WVllrRsktziGMTQZi6JYPKXwBERAEREAREQBLTLogFhlwEAWlYAiIgCIiAJazS6Wst4BYonoBAErAEREAREQBERALTveUIl8oFgACViIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAf/Z', mark: 8.5 },
    { fullName: 'Nguyễn khá Bảnh', birthday: '20-01-2000', gender: 'Nam', photo: 'data:image/jpeg;base64,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', mark: 8.5 },
  ]
   listProducts = [
    {
      "productId": "pd100",
      "imgURL": "01.jpg",
      "productName": "Laptop",
      "price": 30000,
      "Quality": 3,
    },
    {
      "productId": "pd101",
      "imgURL": "02.jpg",
      "productName": "Mobile",
      "price": 54000,
      "Quality": 5,
    },
    {
      "productId": "pd102",
      "imgURL": "04.webp",
      "productName": "Television",
      "price": 22000,
      "Quality": 3,
    },
    {
      "productId": "pd103",
      "imgURL": "03.jpg",
      "productName": "Headphone",
      "price": 1300,
      "Quality": 10,
    },


  ];

  //hàm tăng:
  Tang(id) {
    for (let i = 0; i < this.listProducts.length; i++) {
      if (this.listProducts[i].productId == id) {
        this.listProducts[i].Quality++;
      }
    }
  }
  Giam(id){
    for (let i = 0; i < this.listProducts.length; i++) {
      if (this.listProducts[i].productId == id) {
        if(this.listProducts[i].Quality>0){
          this.listProducts[i].Quality--;
        }
        
      }
    }
  }
  totalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.listProducts.length; i++) {
      totalPrice = totalPrice + this.listProducts[i].price * this.listProducts[i].Quality;
    }
    return totalPrice;
  }
  constructor() { }

  ngOnInit() {
  }

}
