from django.db import models

# Create your models here.
class Member(models.Model) :
    usr = models.CharField(max_length=25)
    pwd = models.CharField(max_length=225)
    findfried = models.BooleanField()
    forpost = models.BooleanField()
    acceptpolicy = models.BooleanField()

    def __str__(self) :
        if self.findfried and not self.forpost :
            purpose = "findfriend"
        elif self.forpost and not self.findfried :
            purpose = "forpost"
        elif self.findfried and self.forpost :
            purpose = "Superadmin"
        db_text = "Username : {usr} , Password : {pwd} , Purpose : {purpose} , AcceptPolicy : {acceptpolicy}"
        db_text = db_text.format(usr=self.usr,pwd=self.pwd,purpose=purpose,acceptpolicy=self.acceptpolicy)
        return db_text

    