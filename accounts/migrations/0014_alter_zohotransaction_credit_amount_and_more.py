# Generated by Django 4.0.5 on 2022-06-18 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_zohotransaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zohotransaction',
            name='credit_amount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='zohotransaction',
            name='debit_amount',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]