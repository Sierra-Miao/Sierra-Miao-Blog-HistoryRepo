#include<stdio.h>
int main()
{
    FILE *fp = fopen("huabook.txt","r+");
    FILE *fp2 = fopen("huabook_out.txt","w");
    char str1[] = "{\n\ttitle:\"";
    char str2[] = "\",\n\tstar:\"";
    char str3[] = "\",\n\tcontent:\"";
    char str4[] = "\"\n},\n";
    char string[1000000];
    while(!feof(fp)){
        fprintf(fp2,"%s",str1);
        fscanf(fp,"%s",string);
        fprintf(fp2,"%s%s",string,str2);
        fscanf(fp,"%s",string);
        fprintf(fp2,"%s%s",string,str3);
        fscanf(fp,"%s",string);
        fprintf(fp2,"%s%s",string,str4);
    }
    fclose(fp);
    fclose(fp2);
    return 0;
}