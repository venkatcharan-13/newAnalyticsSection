# Generated by Django 4.0.5 on 2022-06-27 10:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0017_alter_zohotransaction_credit_amount_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfitLossTransaction',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('accounts.zohotransaction',),
        ),
    ]